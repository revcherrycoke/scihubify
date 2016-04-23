# scihubify
A Firefox extension that provides a toolbar button to open the current page on Sci-Hub, as well as context menu entries for opening links on Sci-Hub and search for selected text (e.g. DOIs, bibliography entries) on Sci-Hub. The latter also works from within the PDF-Viewer.

See https://addons.mozilla.org/en-US/firefox/addon/scihubify/ for screenshots and the latest signed release.

## Installation
**Stable version:** Install the add-on from https://addons.mozilla.org/en-US/firefox/addon/scihubify/

**From source:** Use Mozillas [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation) tool to build an XPI with `jpm xpi`. Note that this XPI will be unsigned, with newer versions of Firefox you will have to disable the signature check for add-ons by setting `xpinstall.signatures.required` to `false` (in `about://config`).
