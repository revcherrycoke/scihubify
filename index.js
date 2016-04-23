var self = require("sdk/self");
var cm = require("sdk/context-menu");
var tabs = require("sdk/tabs");


var SCIHUB_URL = 'http://sci-hub.io/';
var SEARCH_URL = 'http://scholar.google.com.secure.sci-hub.io/scholar?q=';

cm.Item({
  label: "Open on Sci-Hub",
  context: cm.SelectorContext("a[href], button[href]"),
  contentScript: 'self.on("click", function (node) {' +
                 '  self.postMessage(node.href); });',
  onMessage: function(url) {
    tabs.open(SCIHUB_URL + url);
  }
});

cm.Item({
  label: "Search on Sci-Hub",
  context: cm.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  self.postMessage(window.getSelection().toString()); });',
  onMessage: function(selection) {
    tabs.open(SEARCH_URL + selection);
  }
});
