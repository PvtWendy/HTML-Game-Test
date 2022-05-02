let amount = 0
let slaveCost = 10
let slaveAmount = 0
document.getElementById('mainBtn').addEventListener('click', addAmount)
document.getElementById('amount').innerHTML = Math.round(amount * 10) / 10
document.getElementById('slaveCost').innerHTML = slaveCost
document.getElementById('slaveAmount').innerHTML = slaveAmount
document.getElementById('buySlave').addEventListener('click', addSlave)
function addAmount() {
  amount += 1
  document.getElementById('amount').innerHTML = Math.round(amount * 10) / 10
}
function addSlave() {
  if (amount >= slaveCost) {
    slaveAmount += 1
    amount -= slaveCost
    slaveCost = Math.round(slaveCost * 1.15)
    document.getElementById('amount').innerHTML = Math.round(amount * 10) / 10
    document.getElementById('slaveAmount').innerHTML = slaveAmount
    document.getElementById('slaveCost').innerHTML = slaveCost
  }
}
setInterval(() => {
  amount += slaveAmount / 10
  document.getElementById('amount').innerHTML = Math.round(amount * 10) / 10
}, 1000)
