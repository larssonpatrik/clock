var timer = setInterval(clock, 1000);

function clock() {
  var date = new Date();
  document.getElementById("js--clock").innerHTML = formatTime(date.getHours()) +
   ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds());
}

function formatTime(nr) {
  if (nr < 10) {
    return "0" + nr;
  }

  return nr;
}
