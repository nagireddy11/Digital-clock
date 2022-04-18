let interval = 1000;

function time() {
  let hrs = new Date().getHours();

  let mins = new Date().getMinutes();

  let secs = new Date().getSeconds();

  let am_pm = "AM";
  if (hrs == 0) {
    hrs = 12; //11:59AM -->00:00 _-->12:00
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  } //24 hrs format into 12hrs format

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hours").innerText = hrs;
  document.getElementById("mins").innerText = mins;
  document.getElementById("secs").innerText = secs;
  let amPm = document.getElementById("ampm");

  amPm.style.fontSize = "30px";
  amPm.style.fontWeight = "bold";
  amPm.innerText = am_pm;
}

setInterval(time, interval);

function update() {
  let hrs = new Date().getHours();

  let am_pm = "AM";
  if (hrs == 0) {
    hrs = 12; //11:59AM -->00:00 _-->12:00
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  } //24 hrs format into 12hrs format

  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  let wakeuptime = document.getElementById("setwakeuptime").value % 12;

  let breaskfasttime = document.getElementById("setlunchtime").value % 12;
  console.log(breaskfasttime);

  let naptime = document.getElementById("setnaptime").value % 12;

  let nighteup = document.getElementById("setnighteup").value % 12;

  let img = document.getElementById("img-con");

  let gt = document.getElementById("gt");
  let gudtext = document.getElementById("gudmorngtext");

  if (wakeuptime == hrs) {
    img.height = "300";
    gudtext.innerText = "GOOD MORNING!! WAKE UP !!";
    img.src = "./images/morning.svg";
    gt.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  }

  if (breaskfasttime == hrs) {
    img.height = "300";
    img.src = "./images/aftrnoonimage.svg";
    gudtext.innerText = "GOOD AFTERNOON !! TIME TO HAVE FOOD";
    gt.innerText = "Let's have some lunch !!";
  }

  if (naptime == hrs) {
    img.height = "300";
    img.src = "./images/lunch_image.png";
    gudtext.innerText = "GOOD EVENING !!";
    gt.innerText = "STOP YARNING, GET SOME TEA...ITS JUST EVENING!";
  }

  if (nighteup == hrs) {
    img.height = "300";
    img.src = "./images/nightimage.png";
    gt.innerText = "CLOSE YOUR EYES AND GO SLEEP";
    gudtext.innerText = "GOOD NIGHT !!";
  }

  document.getElementById("sel-wakeuptime").innerText =
    "Wake up Time: " + wakeuptime;

  document.getElementById("sel-lunchtime").innerText =
    "Lunch Time: " + breaskfasttime;

  document.getElementById("sel-naptime").innerText = "Nap Time: " + naptime;

  document.getElementById("sel-nighttime").innerText =
    "Night Time: " + nighteup;
}
