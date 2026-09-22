# TickMyRide.com / ZaliczGmine.pl — map overlay

This extension shows visited and unvisited communes in Poland on **Komoot** and **VeloPlanner** maps. It helps you plan routes through new communes using your TickMyRide.com / ZaliczGmine.pl account. You can also add your own GPX tracks.

## Installation

Load the extension locally in a Chromium-based browser such as Chrome or Edge.

1. Download and extract this repository as a ZIP, or clone it with Git.
2. Open `chrome://extensions` (Chrome) or `edge://extensions` (Edge).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the directory containing `manifest.json`.
5. Pin the extension to the toolbar and refresh any open planner tabs.

After updating the files, reload the extension on the extensions page and refresh the planner.

## Setup

1. Open the [Komoot planner](https://www.komoot.com/plan) or [VeloPlanner](https://veloplanner.com/en/plan).
2. Click the extension icon.
3. Under **TickMyRide.com account**, enter your username or user ID and click **Search**.
4. Select your account from the results. The extension saves your choice and loads your visited communes. No password or API key is required.

To switch accounts, search for and select another one. The popup shows the visited commune count and the connection status for the map in the active tab.

## Usage

The overlay works while planning or editing routes.

| Map color | Meaning |
| --- | --- |
| Green communes | Visited by the selected user (currently hidden) |
| Red communes | Unvisited |
| Blue communes | Unvisited communes crossed by the current planner route |
| Blue lines | GPX tracks added through the extension |

- Plan your route as usual. Highlighted communes update automatically when the route changes.
- Use **Hide communes / Show communes** to toggle commune layers.
- Refresh the planner to fetch updated visits after changes on TickMyRide.com or ZaliczGmine.pl.

### GPX tracks

Expand **GPX tracks**, click **Choose**, select a `.gpx` file, then click **Add track**. You can add multiple files, remove them individually with **Remove**, or choose **Remove all**.

Files are saved locally and displayed again when you open a planner. GPX tracks are additional map overlays: they do not become editable planner routes or trigger commune highlighting.

## Data and permissions

The language preference, selected account, and GPX files are stored in `chrome.storage.local`. The extension reads data from the tickmyride.com or zaliczgmine.pl API, depending on the selected language. Requests include the search query, user ID, and map or route bounds. GPX files are processed locally and shared with the planner page for display.

Permissions cover settings storage and access to supported planners, tickmyride.com, and zaliczgmine.pl.

## Libraries and licenses

The extension uses the following open-source projects:

| Library | Purpose | License |
| --- | --- | --- |
| [Turf.js 6.5.0](https://github.com/Turfjs/turf/tree/v6.5.0) | Adapted algorithms for route–commune intersection checks | MIT |
| [mapbox/togeojson](https://github.com/mapbox/togeojson) | GPX conversion to GeoJSON for map display | BSD-2-Clause |

Full license texts and attribution are in [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt). Include this file when distributing copies of the extension.
