let amount = 0
let clickStrength = 1
let slaveCost = 10
let slaveAmount = 0
document.getElementById('mainBtn').addEventListener('click', addAmount)
document.getElementById('buySlave').addEventListener('click', addSlave)

function addAmount() {
  amount += clickStrength
}
function addSlave() {
  if (amount >= slaveCost) {
    slaveAmount += 1
    amount -= slaveCost
    slaveCost = Math.round(slaveCost * 1.15)
  }
} 
function autoAmount() {
  amount += slaveAmount / 100
}
/*----------------------------------------------------------------------------------
Game loop
----------------------------------------------------------------------------------*/

//Generates passive income per 0.1 sec
setInterval(() => {
  autoAmount()
}, 100)
//Update every millisecond the interface
setInterval(() => {
  document.getElementById('amount').innerHTML = Math.round(amount * 10) / 10
  document.getElementById('slaveAmount').innerHTML = slaveAmount
  document.getElementById('slaveCost').innerHTML = slaveCost
}, 1);
