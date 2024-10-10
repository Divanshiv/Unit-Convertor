let feet = document.getElementById("feet");
let inch = document.getElementById("inches");
let meter = document.getElementById("meter");
let centimeter = document.getElementById("cm");

let celsius = document.getElementById("Celsius");
let fehrenheit = document.getElementById("Fehrenheit");
let kelvin = document.getElementById("Kelvin");

let sq_km = document.getElementById("km");
let sq_m = document.getElementById("m");
let sq_cm = document.getElementById("cmeter");
let sq_inch = document.getElementById("inch");
let sq_foot = document.getElementById("foot");

let kilog = document.getElementById("kgram");
let gr = document.getElementById("gram");
let millig = document.getElementById("mgram");

let years = document.getElementById("year");
let months = document.getElementById("month");
let weeks = document.getElementById("week");
let days = document.getElementById("day");
let hrs = document.getElementById("hr");
let mins = document.getElementById("minute");
let sec = document.getElementById("second");
let minisec = document.getElementById("ms");

//time

years.addEventListener("input", function () {
  let y = parseInt(this.value);
  let m = y * 12;
  let w = y * 52;
  let d = y * 365.25;
  let h = y * 8766;
  let min = y * 525960;
  let s = y * 31557600;
  let ms = y * 31557600000;

  months.value = m.toFixed(3);
  weeks.value = w.toFixed(3);
  days.value = d.toFixed(3);
  hrs.value = h.toFixed(3);
  mins.value = min.toFixed(3);
  sec.value = s.toFixed(3);
  minisec.value = ms.toFixed(3);
});

months.addEventListener("input", function () {
  let m = parseInt(this.value);
  let y = m * 0.0833333333;
  let w = m * 4.3482142857;
  let d = m * 30.4375;
  let h = m * 730.5;
  let min = m * 43830;
  let s = m * 2629800;
  let ms = m * 2629800000;

  years.value = y.toFixed(3);
  weeks.value = w.toFixed(3);
  days.value = d.toFixed(3);
  hrs.value = h.toFixed(3);
  mins.value = min.toFixed(3);
  sec.value = s.toFixed(3);
  minisec.value = ms.toFixed(3);
});

weeks.addEventListener("input", function () {
  let w = parseInt(this.value);
  let m = w * 0.2299794661;
  let y = w * 0.0191649555;
  let d = w * 7;
  let h = w * 168;
  let min = w * 10080;
  let s = w * 604800;
  let ms = s * 1000;

  years.value = y.toFixed(3);
  months.value = m.toFixed(3);
  days.value = d.toFixed(3);
  hrs.value = h.toFixed(3);
  mins.value = min.toFixed(3);
  sec.value = s.toFixed(3);
  minisec.value = ms.toFixed(3);
});

days.addEventListener("input", function () {
  let d = parseInt(this.value);
  let m = d * 0.0328542094;
  let y = d * 0.0027378508;
  let w = d * 0.1428571429;
  let h = d * 24;
  let min = d * 1440;
  let s = d * 86400;
  let ms = d * s * 1000;

  years.value = y.toFixed(3);
  months.value = m.toFixed(3);
  weeks.value = w.toFixed(3);
  hrs.value = h.toFixed(3);
  mins.value = min.toFixed(3);
  sec.value = s.toFixed(3);
  minisec.value = ms.toFixed(3);
});

hrs.addEventListener("input", function () {
  let h = parseInt(this.value);
  let m = h * 0.0013689254;
  let y = h * 0.0001140771;
  let w = h * 0.005952381;
  let d = h * 0.0416666667;
  let min = h * 60;
  let s = h * 3600;
  let ms = h * s * 1000;

  years.value = y.toFixed(3);
  months.value = m.toFixed(3);
  weeks.value = w.toFixed(3);
  days.value = d.toFixed(3);
  mins.value = min.toFixed(3);
  sec.value = s.toFixed(3);
  minisec.value = ms.toFixed(3);
});

mins.addEventListener("input", function () {
  let min = parseInt(this.value);
  let m = min * 0.0000228154;
  let y = min * 0.0000019013;
  let w = min * 0.0000992063;
  let d = min * 0.0006944444;
  let h = min * 0.0166666667;
  let s = min * 60;
  let ms = min * s * 1000;

  years.value = y;
  months.value = m;
  weeks.value = w;
  days.value = d;
  hrs.value = h;
  sec.value = s;
  minisec.value = ms;
});

sec.addEventListener("input", function () {
  let s = parseInt(this.value);
  let m = s * 3.802570537e-7;
  let y = s * 3.168808781e-8;
  let w = s * 0.0000016534;
  let d = s * 0.0000115741;
  let h = s * 0.0002777778;
  let min = s * 0.0166666667;
  let ms = s * 1000;

  years.value = y;
  months.value = m;
  weeks.value = w;
  days.value = d;
  hrs.value = h;
  mins.value = min;
  minisec.value = ms;
});

minisec.addEventListener("input", function () {
  let ms = parseInt(this.value);
  let m = ms * 3.802570537e-10;
  let y = ms * 3.168808781e-11;
  let w = ms * 1.653439153e-9;
  let d = ms * 1.157407407e-8;
  let h = ms * 2.777777777e-7;
  let min = ms * 0.0000166667;
  let s = ms * 0.001;

  years.value = y;
  months.value = m;
  weeks.value = w;
  days.value = d;
  hrs.value = h;
  mins.value = min;
  sec.value = s;
});

//inch/feet
feet.addEventListener("input", function () {
  let f = this.value;
  let i = f * 12;
  let m = f / 3.2808;
  let cm = f / 30.48;
  inch.value = i.toFixed(2);
  meter.value = m.toFixed(2);
  centimeter.value = cm.toFixed(2);
  inch.value = i;
  meter.value = m;
  centimeter.value = cm;
});

inch.addEventListener("input", function () {
  let i = this.value;
  let f = i / 12;
  let m = i / 39.3701;
  let cm = i / 2.54;
  feet.value = f.toFixed(2);
  meter.value = m.toFixed(2);
  centimeter.value = cm.toFixed(2);
  feet.value = f;
  meter.value = m;
  centimeter.value = cm;
});

meter.addEventListener("input", function () {
  let m = this.value;
  let f = m * 3.2808;
  let i = m * 39.3701;
  let cm = m * 100;
  feet.value = f.toFixed(2);
  centimeter.value = cm.toFixed(2);
  inch.value = i.toFixed(2);
  inch.value = i;
  feet.value = f;
  centimeter.value = cm;
});

centimeter.addEventListener("input", function () {
  let cm = this.value;
  let f = cm * 0.032;
  let i = cm * 0.394;
  let m = cm * 0.01;
  inch.value = i.toFixed(2);
  meter.value = m.toFixed(2);
  feet.value = f.toFixed(2);
  inch.value = i;
  feet.value = f;
  meter.value = m;
});

//tempreature

celsius.addEventListener("input", function () {
  let c = parseInt(this.value);
  let f = (9 / 5) * c + 32;
  let k = c + 273.15;
  fehrenheit.value = f.toFixed(2);
  kelvin.value = k.toFixed(2);
  celsius.value = c;
  fehrenheit.value = f;
  kelvin.value = k;
});

fehrenheit.addEventListener("input", function () {
  let f = parseInt(this.value);
  let c = f - (32 * 5) / 9;
  let k = f + (459.67 * 5) / 9;
  celsius.value = c.toFixed(2);
  kelvin.value = k.toFixed(2);
  celsius.value = c;
  fehrenheit.value = f;
  kelvin.value = k;
});

kelvin.addEventListener("input", function () {
  let k = parseInt(this.value);
  let c = k - 273.15;
  let f = ((k - 273.15) * 9) / 5 + 32;
  fehrenheit.value = f.toFixed(2);
  celsius.value = c.toFixed(2);
  celsius.value = c;
  fehrenheit.value = f;
  kelvin.value = k;
});

//area

sq_km.addEventListener("input", function () {
  let km = this.value;
  let m = km * 1000000;
  let i = km * 1550003100;
  let cm = km * 10000000000;
  let f = km * 10763910.417;

  // sq_inch.value = i.toFixed(2);
  // sq_m.value = m.toFixed(2);
  // sq_cm.value = cm.toFixed(2);
  // sq_foot.value = f.toFixed(2);

  sq_inch.value = i;
  sq_m.value = m;
  sq_cm.value = cm;
  sq_foot.value = f;
});

sq_m.addEventListener("input", function () {
  let m = this.value;
  let km = m * 0.000001;
  let f = m * 10.7639;
  let i = m * 1550.0031;
  let cm = m * 10000;

  // sq_km.value = km.toFixed(2)
  // sq_inch.value = i.toFixed(2);
  // sq_cm.value = cm.toFixed(2);
  // sq_foot.value = f.toFixed(2);

  sq_inch.value = i;
  sq_cm.value = cm;
  sq_foot.value = f;
  sq_km.value = km;
});

sq_inch.addEventListener("input", function () {
  let i = this.value;
  let km = i * 6.4516e-10;
  let f = i * 0.0069444444;
  let m = i * 0.00064516;
  let cm = i * 6.4516;

  // sq_km.value = km.toFixed(2)
  // sq_inch.value = i.toFixed(2);
  // sq_cm.value = cm.toFixed(2);
  // sq_foot.value = f.toFixed(2);

  sq_m.value = m;
  sq_cm.value = cm;
  sq_foot.value = f;
  sq_km.value = km;
});

sq_cm.addEventListener("input", function () {
  let cm = this.value;
  let km = cm * 1e-10;
  let f = cm * 0.001076391;
  let m = cm * 0.0001;
  let i = cm * 0.15500031;

  // sq_km.value = km.toFixed(2)
  // sq_inch.value = i.toFixed(2);
  // sq_cm.value = cm.toFixed(2);
  // sq_foot.value = f.toFixed(2);

  sq_m.value = m;
  sq_inch.value = i;
  sq_foot.value = f;
  sq_km.value = km;
});

sq_foot.addEventListener("input", function () {
  let f = this.value;
  let km = f * 9.290304e-8;
  let cm = f * 929.0304;
  let m = f * 0.09290304;
  let i = f * 144;

  // sq_km.value = km.toFixed(2)
  // sq_inch.value = i.toFixed(2);
  // sq_cm.value = cm.toFixed(2);
  // sq_foot.value = f.toFixed(2);

  sq_m.value = m;
  sq_inch.value = i;
  sq_cm.value = cm;
  sq_km.value = km;
});

//Weight

kilog.addEventListener("input", function () {
  let kg = this.value;
  let g = kg * 1000;
  let mg = kg * 1000000;
  gr.value = g;
  millig.value = mg;
});

gr.addEventListener("input", function () {
  let g = this.value;
  let kg = g * 0.001;
  let mg = g * 1000;
  kilog.value = kg;
  millig.value = mg;
});

millig.addEventListener("input", function () {
  let mg = this.value;
  let kg = mg * 0.000001;
  let g = mg * 0.001;
  kilog.value = kg;
  gr.value = g;
});

//tab change
let i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
tablinks = document.getElementsByClassName("tablinks");
function unit(evt, unitName) {
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(unitName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload = function () {
  tabcontent[0].style.display = "block";
};
