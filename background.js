chrome.runtime.onInstalled.addListener(function() {
    console.log("Wordle with friends is active");
});

function logWordleStatus() {
    alert(document.head.title);
    console.log(document.head.title);
}

chrome.action.onClicked.addListener((tab) => {
    // if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        function: logWordleStatus
      });
    // }
  });