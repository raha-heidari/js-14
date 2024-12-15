//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

const colors = ["red", "blue", "green", "pink", "brown", "dark green", "purple", "yellow"]
const yearText = document.querySelector("h1")

function change() {
    const random = colors[Math.floor(Math.random()* colors.length)]
    yearText.style.color = random
}
setInterval(change, 1000)


const completed = document.querySelector("li")
completed.style.backgroundColor = "green"

const onGoing = document.getElementById("li-two")
onGoing.style.backgroundColor = "yellow"

const coming = document.querySelectorAll(".list")
coming.forEach(el => {
    el.style.backgroundColor = "red"
})