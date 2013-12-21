// Called for current tab when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'happyEyes.js'
  });
});
