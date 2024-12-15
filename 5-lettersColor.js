/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];

const text = prompt("Enter your desired text")

const letter = text.split("")
const div = document.querySelector("#word")


letter.forEach(elm => {
    const span = document.createElement("span")
    const color = colors[Math.floor(Math.random() * colors.length)]
    span.innerText = elm
    span.style.color = color
    div.appendChild(span)
});