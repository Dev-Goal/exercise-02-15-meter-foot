let btnChange = document.getElementById("btn");
btnChange.addEventListener("click", getChange);
function getChange() {
  let numberFoot = document.getElementById("numberFoot").value;
  let numberMeter = document.getElementById("numberMeter").value;

  function numberFootToMeter(numberFoot) {
    let numberMeter = 0.305 * numberFoot;
    return numberMeter;
  }

  function numberMeterToFoot(numberMeter) {
    let numberFoot = 3.279 * numberMeter;
    return numberFoot;
  }
  //   numberMeterToFoot();
  //   numberFootToMeter();
  document.getElementById("resultFoot").innerHTML =
    numberFoot + " foot = " + numberFootToMeter(numberFoot) + " meter";
  document.getElementById("resultMeter").innerHTML =
    numberMeter + " meter = " + numberMeterToFoot(numberMeter) + " foot";
}

// function footToMeter(foot) {
//     let meter = 0.305 * foot;
//     return meter;
// }

// function meterToFoot(meter) {
//     let foot = 3.279 * meter;
//     return foot;
// }

// let foot = prompt("Nhập foot: ");
// document.write(foot + " foot " + "= " + footToMeter(foot) + " meter");
// document.write ("<br>")
// let meter = prompt("Nhập meter: ");
// document.write(meter + " meter " + "= " + meterToFoot(meter) + " foot");
