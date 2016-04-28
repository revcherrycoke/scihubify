const {ActionButton} = require("sdk/ui/button/action");
const {Item, SelectorContext, SelectionContext}  = require("sdk/context-menu");
const tabs = require("sdk/tabs");

const SCIHUB_URL = 'http://sci-hub.bz/';
const SEARCH_URL = 'http://scholar.google.com.secure.sci-hub.io/scholar?q=';

/* Context menu for opening a given link on sci-hub */
Item({
  label: "Open link on Sci-Hub",
  context: SelectorContext("a[href], button[href]"),
  contentScript: 'self.on("click", function (node) {' +
                 '  self.postMessage(node.href); });',
  onMessage: function(url) {
    tabs.open(SCIHUB_URL + url);
  }
});

/* Context menu for searching for the selected text on sci-hub */
Item({
  label: "Search Sci-Hub for selection",
  context: SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  self.postMessage(window.getSelection().toString()); });',
  onMessage: function(selection) {
    tabs.open(SEARCH_URL + selection);
  }
});

/* Button for opening the current website on sci-hub */
var button = ActionButton({
  id: "scihub-link",
  label: "Open page on sci-hub.io",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"},
  onClick: function(state) {
    tabs.open(SCIHUB_URL + tabs.activeTab.url);
  }
});
