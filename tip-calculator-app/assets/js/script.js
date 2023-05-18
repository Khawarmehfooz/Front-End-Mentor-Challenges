const billAmount = document.getElementById("bill")
const tipOutPut = document.getElementById("tip-amount")
const peoples = document.getElementById("people")
const peopleOutput = document.getElementById("total-amount")
const resetBtn = document.getElementById("reset-btn")
// Error Messages
const errorMessage = document.getElementById("error-msg")
const billError = document.getElementById("bill-error")
// Tips button
const fivePercentTip = document.getElementById('five-percent-tip')
const tenPercentTip = document.getElementById("ten-percent-tip")
const fifteenPercentTip = document.getElementById("fifteen-percent-tip")
const twentyFivePercentTip = document.getElementById("twentyfive-percent-tip")
const fiftyPercentTip = document.getElementById("fifty-percent-tip")
const customInput = document.getElementById("custom-input")
// 
let tipAmount;

// Bill Amount
billAmount.addEventListener("keyup", () => {
    if (billAmount.value <= 0) {

        billError.style.display = "block"
        billAmount.parentElement.style.borderColor = "red"
        tipOutPut.innerText = `$0.00`
    } else if (billAmount.value > 0) {
        billAmount.parentElement.style.borderColor = "hsl(172, 67%, 45%)"
        billError.style.display = "none"
    }
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.color = "hsl(183, 100%, 15%)"

})
// Tip Calculations
// 5%
fivePercentTip.addEventListener("click", () => {
    tipAmount = Number(billAmount.value) * .05
    // tipOutPut.innerText = `$${tipAmount}`
})
// 10%
tenPercentTip.addEventListener("click", () => {
    tipAmount = Number(billAmount.value) * .10
    // tipOutPut.innerText = `$${tipAmount}`
})
// 15%
fifteenPercentTip.addEventListener("click", () => {
    tipAmount = Number(billAmount.value) * .15
    // tipOutPut.innerText = `$${tipAmount}`
})
// 25%
twentyFivePercentTip.addEventListener("click", () => {
    tipAmount = Number(billAmount.value) * .25
    // tipOutPut.innerText = `$${tipAmount}`
})
// 50%
fiftyPercentTip.addEventListener("click", () => {
    tipAmount = Number(billAmount.value) * .50
    console.log(tipAmount)
    // tipOutPut.innerText = `$${tipAmount}`
})
// Custom tip
customInput.addEventListener("keyup", () => {
    tipAmount = Number(billAmount.value) * Number(0.01 * customInput.value)

})


// Amount Per Person
peoples.addEventListener("keyup", () => {
    if (peoples.value <= 0) {
        errorMessage.style.display = "block"
        peoples.parentElement.style.borderColor = "red"

    } else if (peoples.value >= 1) {
        errorMessage.style.display = "none"
        peoples.parentElement.style.borderColor = "hsl(172, 67%, 45%)"
        tipOutPut.innerText = `$${(tipAmount / peoples.value).toFixed(2)}`
        let output = ((Number(billAmount.value) + tipAmount) / peoples.value)
        if (isNaN(output)) {
            peopleOutput.innerText = `$0.00`
            tipOutPut.innerText = `$0.00`
        } else {

            peopleOutput.innerText = `$${((Number(billAmount.value) + tipAmount) / peoples.value).toFixed(2)}`
        }
    }
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.color = "hsl(183, 100%, 15%)"
})
// Reset Inputs
resetBtn.addEventListener("click", () => {
    billAmount.value = ""
    peoples.value = ""
    tipOutPut.innerText = "$0.00"
    peopleOutput.innerText = "$0.00"
    customInput.value = ""
    billAmount.parentElement.style.borderColor = "transparent"
    billError.style.display = "none"
    errorMessage.style.display = "none"
    peoples.parentElement.style.borderColor = "transparent"
})