let amount = 0
let clickStrength = 1
let factoryCost = [10,50,100,250,500,1000,2500,5000,10000]
let factoryAmount = [0,0,0,0,0,0,0,0]
let cont = 0
document.getElementById('mainBtn').addEventListener('click', addAmount)

function addAmount() {
  amount += clickStrength
}
//To be honest, I don't know why this didn't glitch badly, but
//holy shit am I thankful it didn't
function addFactories() {
  if (amount >= factoryCost[cont]) {
    factoryAmount[cont] += 1
    amount -= factoryCost[cont]
    factoryCost[cont] = Math.round(factoryCost[cont] * 1.15)
  }
}
  buySlow.onclick = function addSlow() {
    cont = 0
    addFactories();
  }
  buyClicker.onclick = function addClicker() {
    cont = 1
    addFactories();
  }
  buyFast.onclick = function addFast() {
    cont = 2
    addFactories();
  }
/*Also add the amounts here because... well also couldn't think
 another way to avoid this terribleness*/ 
function autoAmount() {
  amount += factoryAmount[0] / 100
  amount += factoryAmount[1] / 50
  amount += factoryAmount[2] / 10
}
/*----------------------------------------------------------------------------------
Game loop
----------------------------------------------------------------------------------*/

//Generates passive income per 0.1 sec
setInterval(() => {
  autoAmount()
}, 100)
//Update the interface every millisecond
setInterval(() => {
  document.getElementById('amount').innerHTML = Math.round(amount * 10) / 10
  document.getElementById('slowAmount').innerHTML = factoryAmount[0]
  document.getElementById('slowCost').innerHTML = factoryCost[0]
  document.getElementById('clickerCost').innerHTML = factoryCost[1]
  document.getElementById('clickerAmount').innerHTML = factoryAmount[1]
  document.getElementById('fastCost').innerHTML = factoryCost[2]
  document.getElementById('fastAmount').innerHTML = factoryAmount[2]
}, 1);
