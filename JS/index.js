const clock = document.getElementById('main-clock');
const time = document.getElementById('text-down2');
let timePassed = 0;
const date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hrs = date.getHours();
clock.textContent = ("0" + hrs).substr(-2) + ":" + ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2);

setInterval(function() {
  const date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hrs = date.getHours();
  timePassed = timePassed + 1;
  clock.textContent = ("0" + hrs).substr(-2) + ":" + ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2);
  time.innerHTML = timePassed + " seconds have passed since you opened this page.";
  if (timePassed == 1) {
    time.innerHTML = timePassed + " second have passed since you opened this page.";
  }
}, 1000);