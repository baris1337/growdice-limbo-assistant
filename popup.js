function injectTheScript() {
    // Execute script logic here
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content_script.js']});
    });
  }
  
  function stopLoop() {
    allah = false;
    checkInputValue();
  }
  
  checkInputValue();
  document.getElementById('authenticateBtn').addEventListener('click', injectTheScript);
  document.getElementById('stopBtn').addEventListener('click', stopLoop);