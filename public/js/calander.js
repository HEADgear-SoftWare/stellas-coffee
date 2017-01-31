
window.onload = function(){
    document.getElementById('events').addEventListener("click", showEvents);
    document.getElementById('closeCal').addEventListener("click", hideEvents);
    document.getElementById('calModel').addEventListener("click", hideEvents);
}

function showEvents() {
  var video = document.getElementById('video');
  video.pause();
  var cal = document.getElementById('calModel');
  cal.className = "model-shield show";
  var sht = document.getElementById('short');
  sht.className = "hide";
  var hideHome = document.getElementsByClassName('info');
  for (var i = 0; i < hideHome.length; i++) {
    hideHome[i].className = "info hide";
  }
}

function hideEvents() {
  setTimeout(function(){
    var video = document.getElementById('video');
    video.play();
    var sht = document.getElementById('short');
    sht.className = "show";
  }, 1000);
  var cal = document.getElementById('calModel');
  cal.className = "model-shield hide";
  var hideHome = document.getElementsByClassName('info');
  for (var i = 0; i < hideHome.length; i++) {
    hideHome[i].className = "info show";
  }
}
