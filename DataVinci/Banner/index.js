function updateCountdown() {
    var countdownElement = document.getElementById("countdown");
    var timeLeft = countdownElement.innerText;
    var timeArray = timeLeft.split(":");
    var hours = parseInt(timeArray[0]);
    var minutes = parseInt(timeArray[1]);
    var seconds = parseInt(timeArray[2]);
  
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(countdownInterval);
      return;
    }
  
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        }
      }
    }
  
    countdownElement.innerText = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  
  var countdownInterval = setInterval(updateCountdown, 1000);
  