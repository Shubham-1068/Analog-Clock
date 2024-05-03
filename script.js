let dt, hours, minutes, seconds;

setInterval(() => {
  dt = new Date();

  hours = 30*dt.getHours();
  minutes = 6*dt.getMinutes();
  seconds = 6*dt.getSeconds();

//   console.log(hours);
//   console.log(minutes);
  console.log(seconds);

  document.querySelector(".needle_h").style.transform = `rotate(${hours}deg)`;

  document.querySelector(".needle_m").style.transform = `rotate(${minutes}deg)`;

  document.querySelector(".needle_s").style.transform = `rotate(${seconds}deg)`;
}, 1000);

