var allah = true;

async function checkInputValue() {

  while (allah) {

    var sa = true;
    var balance = document.querySelector("#balance").textContent;

    if (balance.includes(".")) {
      document.querySelector("#root > div.sc-di5iv0-0.kYHwxp > div.sc-di5iv0-1.dsCYDh > div.sc-1f61k5n-0.fmxKJS > div > div.sc-a632jl-0.jqpFcl > div.sc-a632jl-1.cxvbQk > div.sc-a632jl-2.kYPhXl > div:nth-child(1) > div > div:nth-child(1) > img").click();
    }

    var ifitsone = document.querySelector("#root > div.sc-di5iv0-0.kYHwxp > div.sc-di5iv0-1.dsCYDh > div.sc-1f61k5n-0.fmxKJS > div > div.sc-a632jl-0.jqpFcl > div.sc-a632jl-1.cxvbQk > div.sc-a632jl-2.kYPhXl > div:nth-child(1) > div > input[type=text]");

    while (true && allah) {

      if (ifitsone.value == 1) break;
      document.querySelector("#root > div.sc-di5iv0-0.kYHwxp > div.sc-di5iv0-1.dsCYDh > div.sc-1f61k5n-0.fmxKJS > div > div.sc-a632jl-0.jqpFcl > div.sc-a632jl-1.cxvbQk > div.sc-a632jl-2.kYPhXl > div:nth-child(1) > div > div:nth-child(3) > div > a:nth-child(1)").click();
      await new Promise(resolve => setTimeout(resolve, 10));
    }

    document.querySelector("#placeBet").click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    var WinOrLose = window.getComputedStyle(document.querySelector("#root > div.sc-di5iv0-0.kYHwxp > div.sc-di5iv0-1.dsCYDh > div.sc-1f61k5n-0.fmxKJS > div > div.sc-a632jl-0.jqpFcl > div.sc-a632jl-1.cxvbQk > div.sc-a632jl-4.gAHnQz > span")).color;

    if (WinOrLose == "rgb(243, 0, 0)") { // LOSE
      while (sa == true && allah) {
        document.querySelector("#last").click();
        document.querySelector("#placeBet").click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        var WinOrLose = window.getComputedStyle(document.querySelector("#root > div.sc-di5iv0-0.kYHwxp > div.sc-di5iv0-1.dsCYDh > div.sc-1f61k5n-0.fmxKJS > div > div.sc-a632jl-0.jqpFcl > div.sc-a632jl-1.cxvbQk > div.sc-a632jl-4.gAHnQz > span")).color;

        if (WinOrLose == "rgb(0, 226, 0)") { // WIN
          sa = false;
          while (true && allah) {
            if (ifitsone.value == 1) break;
            document.querySelector("#root > div.sc-di5iv0-0.kYHwxp > div.sc-di5iv0-1.dsCYDh > div.sc-1f61k5n-0.fmxKJS > div > div.sc-a632jl-0.jqpFcl > div.sc-a632jl-1.cxvbQk > div.sc-a632jl-2.kYPhXl > div:nth-child(1) > div > div:nth-child(3) > div > a:nth-child(1)").click();
            await new Promise(resolve => setTimeout(resolve, 10));
            sa = false;
          }
        }
      }
    }
  }
}

function injectTheScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['content_script.js'] });
  });
}

function stopLoop() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['aminisikeyim.js'] });
  });
}

checkInputValue();
document.getElementById('authenticateBtn').addEventListener('click', injectTheScript);
document.getElementById('stopBtn').addEventListener('click', stopLoop);
