// Init
var engaged = false;

// This needs to change based on tab status
chrome.browserAction.setTitle({title: 'Happyyyy!'});

// Saving for later
// chrome.browserAction.setIcon(object details, function callback)

// Called for current tab when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  // Only want to load this thing once
  if ( !engaged ){
    // Load the content script
    chrome.tabs.executeScript({
      file: 'happyEyes.js'
    });
    // We are now engaged. Go happy eyes!
    engaged = true;
  } else {
    // If script has been loaded already, just let it know about the click
    chrome.tabs.sendMessage(tab, 'clicked')
  }

});
