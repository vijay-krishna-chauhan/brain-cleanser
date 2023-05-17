var startTime = new Date().getTime();
  
// update the time every second
setInterval(function() {
  // get the current time in milliseconds again
  var currentTime = new Date().getTime();

  // calculate the time difference
  var timeDiff = currentTime - startTime;

  // convert the time difference to seconds
  var seconds = Math.floor(timeDiff / 1000);


  // update the time display
  document.getElementById("time").innerHTML = seconds + " seconds";
  if(seconds==3600)
          alert("Time for a digital detox")
  if (seconds==3605) {
          window.location.href = "./go.html";
          // Set cookie with name "access" and value "allowed"
  
  }
  

  
  
}, 1000);