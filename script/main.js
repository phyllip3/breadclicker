var dough = 0;
var bread = 0;
var money = 100;
var workers = 0;
var ovenCap = 5;
var workerCost = 20;

const DOUGHCT = document.querySelector("#doughCount");
const BREADCT = document.querySelector("#breadCount");
const MONEYCT = document.querySelector("#moneyCount");
const BAKEBT = document.querySelector("#bakeButton");
const KITCHEN = document.querySelector("#kitchen");
const OFFICE = document.querySelector("#office");
const SLIDER = document.querySelector("#locationSlider");

function makeDough() {
  if (money > 0) {
    money--;
    dough++;
  }
}

function bakeBread() {
  if (dough > 0) {
    if (dough >= ovenCap) {
      bread += ovenCap;
      dough -= ovenCap;
    }
    else {
      bread += dough;
      dough = 0;
    }
    BAKEBT.disabled = true;
    setTimeout( function() {
      BAKEBT.disabled = false;
    }, 500);
  }
}

function sellBread() {
  if (bread > 0) {
    bread--;
    money += 2;
  }
}

function hireWorker() {
  if (money >= workerCost) {
    money -= workerCost;
    workers++;
    workerCost = Math.ceil(workerCost * 1.2);
  }
}

function updateVal(ele, val) {
  document.querySelector(ele).innerHTML
}

function moveKitchen() {
  SLIDER.style.left = "0px"
}

function moveOffice() {
  SLIDER.style.left = "-700px"
}

window.setInterval(function() {
  dough += (workers * 1/100);


  if (workers > 0) {
      DOUGHCT.innerHTML = Math.floor(dough) + " (+" + (workers) + "/sec)";
  } else {
      DOUGHCT.innerHTML = Math.floor(dough);
  }
  BREADCT.innerHTML = Math.floor(bread);
  MONEYCT.innerHTML = Math.floor(money);


  document.querySelector("#bakeDesc").innerHTML = ovenCap
  document.querySelector("#workerDesc").innerHTML = workerCost

}, 10)
