var headerElements = document.querySelectorAll("[id^='header']");
    var tooltipTextElements = document.querySelectorAll("[id^='tooltipText']");
  
    headerElements.forEach(function(header, index) {
      header.addEventListener("click", function() {
        var textToCopy = header.textContent;
        var tempInput = document.createElement("input");
        tempInput.setAttribute("value", textToCopy);
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        tooltipTextElements[index].textContent = "Copied!";
        setTimeout(function() {
          tooltipTextElements[index].textContent = "Copy";
        }, 1500);
      });
    });