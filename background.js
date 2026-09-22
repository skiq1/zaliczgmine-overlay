importScripts('logger.js', 'message-protocol.js');

const log = globalThis.ZaliczGmineLogger.create('background');

const { MESSAGE } = globalThis.ZaliczGmineMessageProtocol;

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    log.info('Overlay installed');
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type !== MESSAGE.FETCH) return false;

  const startedAt = Date.now();
  log.debug('Starting fetch', { responseType: request.responseType });
  fetch(request.url)
    .then(async (response) => {
      log.debug('HTTP response', { status: response.status, durationMs: Date.now() - startedAt });
      if (request.responseType === 'text') {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      }
      const data = await response.json();
      if (!response.ok) {
        throw Object.assign(new Error(data?.message || `HTTP ${response.status}`), {
          code: data?.code, http: response.status
        });
      }
      return data;
    })
    .then((data) => sendResponse({ success: true, data }))
    .catch((error) => {
      log.error('Fetch failed', error);
      sendResponse({ success: false, error: error.message, code: error.code, http: error.http });
    });

  return true;
});
