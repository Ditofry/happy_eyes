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

  }
chrome.tabs.sendMessage(tab.id, { text: "report_back" });

    // Add listener for messages
  //   chrome.runtime.onConnect.addListener(function(port) {
  //     console.log(port);
  //     console.assert(port.name == "happyEyes");
  //     port.postMessage({act: "clicked"});
  //   });
  //   // We are now engaged. Go happy eyes!
  //   engaged = true;
  // } else {
  //   console.log(tabId);
  //   chrome.tabs.sendMessage(tabId, {act: 'adadss'});
  // }

});

