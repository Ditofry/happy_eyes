// Init
var engaged = false;

// This needs to change based on tab status
chrome.browserAction.setTitle({title: 'Happyyyy!'});

// Saving for later
// chrome.browserAction.setIcon(object details, function callback)

// Called for current tab when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var tabId = tab.id;
  // Only want to load this thing once
  if ( !engaged ){
    // Load the content script
    chrome.tabs.executeScript({
      file: 'happyEyes.js'
    });
    // Only load once
    engaged = true;
  }
  // Let happyEyes.js know that the user clicked action btn
  chrome.tabs.sendMessage(tab.id, { from: "browserAction" });
});