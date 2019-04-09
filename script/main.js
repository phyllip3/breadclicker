var dough = 0;
var bread = 0;
var money = 0;
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
    dough++;
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
    money = 2*bread;
    bread = 0;
  }
}

function hireWorker() {
  if (money >= workerCost) {
    money -= workerCost;
    workers++;
    workerCost = Math.ceil(workerCost * 1.2);
    //document.querySelector("#doughInv").appendChild(createTooltip("worker", "doughTool"));
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

/*
function createTooltip(key, id) {
  let tooltip = document.createElement("div");
  let row_key = document.createElement("div");
  let row_val = document.createElement("div");
  tooltip.setAttribute("class", "tooltip");
  row_key.setAttribute("class", "row_key");
  row_key.innerHTML = key;
  row_val.setAttribute("id", id)
  row_val.setAttribute("class", "row_val");
  tooltip.appendChild(row_key);
  tooltip.appendChild(row_val);
  return tooltip;
} */

window.setInterval(function() {
  dough += (workers * 1/100);

  if (workers > 0) {
      DOUGHCT.innerHTML = Math.floor(dough) + " (+" + (workers) + " / sec)";
  } else {
      DOUGHCT.innerHTML = Math.floor(dough);
  }

  BREADCT.innerHTML = Math.floor(bread);
  MONEYCT.innerHTML = Math.floor(money);


  document.querySelector("#bakeDesc").innerHTML = ovenCap
  document.querySelector("#workerDesc").innerHTML = workerCost

}, 10)
