// Set the date we're counting down to
let countDownDate = new Date("Jun 20, 2019 12:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
  // Get todays date and time
  let now = new Date().getTime();
  // Find the distance between now an the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days < 10 ? days = "0" + days : days = days;
  hours < 10 ? hours = "0" + hours : hours = hours;
  minutes < 10 ? minutes= "0" + minutes : minutes = minutes;
  seconds < 10 ? seconds= "0" + seconds : seconds = seconds;

  document.getElementById("time").innerHTML = days + "d " + hours + "h " +
  minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Woop Woop! We are late!";
  }
}, 1000);
