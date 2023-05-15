// Inputs
let inputDay = document.getElementById("day")
let inputMonth = document.getElementById("month")
let inputYear = document.getElementById("year")
let calcBtn = document.getElementById("calc-btn")
// Outputs
let outputDay = document.getElementById("output-day")
let outputMonth = document.getElementById("output-month")
let outputYear = document.getElementById("output-year")

const inputValidator = () => {
    const allInputs = document.querySelectorAll("input")
    let validator = true;
    allInputs.forEach((el) => {
        const parent = el.parentElement;
        if (!el.value) {
            el.style.borderColor = "hsl(0, 100%, 67%)";
            parent.querySelector("span").innerText = `*Required`
            parent.querySelector("label").style.color = "hsl(0, 100%, 67%)"
            validator = false
        } else if (inputMonth.value > 12) {
            inputMonth.style.borderColor = "hsl(0, 100%, 67%)"
            inputMonth.parentElement.querySelector("span").textContent = `Must be a Valid Month`
            inputMonth.parentElement.querySelector("span").style.color = "hsl(0, 100%, 67%)"
            inputMonth.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
            validator = false

        } else if (inputDay.value > 31) {
            inputDay.style.borderColor = "hsl(0, 100%, 67%)"
            inputDay.parentElement.querySelector("span").textContent = `Must be a Valid Day`
            inputDay.parentElement.querySelector("span").style.color = "hsl(0, 100%, 67%)"
            inputDay.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
            validator = false

        } else if (inputYear.value > new Date().getFullYear()) {
            inputYear.style.borderColor = "hsl(0, 100%, 67%)"
            inputYear.parentElement.querySelector("span").textContent = `Must be a Valid Year`
            inputYear.parentElement.querySelector("span").style.color = "hsl(0, 100%, 67%)"
            inputYear.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
            validator = false
        } else {
            el.style.borderColor = "hsl(0, 0%, 86%)"
            parent.querySelector("span").textContent = ""
            validator = true;
        }
    })
    return validator

}

calcBtn.addEventListener('click', () => {

    const newDate = new Date()
    let currentDay = newDate.getDate()
    let currentMonth = newDate.getMonth() + 1
    let currentYear = newDate.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (inputValidator()) {
        if (inputDay.value > currentDay) {
            currentDay = currentDay + months[currentMonth - 1]
            currentMonth = currentMonth - 1
        }
        if (inputMonth.value > currentMonth) {
            currentMonth = currentMonth + 12
            currentYear = currentYear - 1
        }
        let isLeapYear = (currentYear % 4 == 0 && currentYear % 100 != 0) || currentYear % 400 == 0;
        if (isLeapYear) {
            months[1] = 29;
        }
        let day = currentDay - inputDay.value
        let month = currentMonth - inputMonth.value
        let year = currentYear - inputYear.value
        outputDay.textContent = day
        outputMonth.textContent = month
        outputYear.textContent = year
    }

})
