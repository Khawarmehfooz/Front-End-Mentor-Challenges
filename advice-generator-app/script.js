const API_URL = `https://api.adviceslip.com/advice/{slip_id}`;
const adviceId = document.getElementById("advice-id")
const adviceContent = document.getElementById("advice-content")
const getAdviceButton = document.getElementById("btn")

let id = 2;
// getAdvice(adviceId)
getAdviceButton.addEventListener("click", () => {
    fetch(`https://api.adviceslip.com/advice/${id}`).then((res) => {
        return res.json()
    }).then((data) => {
        adviceId.innerText = `ADVICE #${data.slip.id}`;
        adviceContent.innerText = `"${data.slip.advice}"`

    })
    id++
})