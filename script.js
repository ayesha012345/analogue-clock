/* script.js */
let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('min');
let secondHand = document.getElementById('sec');

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hRotationDeg = 30 * hours + minutes / 2;
  let mRotationDeg = 6 * minutes;
  let sRotationDeg = 6 * seconds;

  hourHand.style.transform = `rotate(${hRotationDeg}deg)`;
  minuteHand.style.transform = `rotate(${mRotationDeg}deg)`;
  secondHand.style.transform = `rotate(${sRotationDeg}deg)`;
}

setInterval(updateClock, 1000);
