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

  // chrome.tabs.onConnect.addListener(function(port) {
  //   console.assert(port.name == "happyEyes");
  //   port.postMessage({question: "Who's there?"});
  // });

    engaged = true;
  }
  
  p = chrome.tabs.connect(tabId);
  console.log(tab.id);
  //p.sendMessage(tab.id, { text: "report_back" });
  chrome.tabs.sendMessage(tab.id, { text: "report_back" });
  // chrome.tabs.onConnect.addListener(function(port) {
  //   console.assert(port.name == "knockknock");
  //       port.postMessage({question: "Who's there?"});
  //   });
  // });

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

