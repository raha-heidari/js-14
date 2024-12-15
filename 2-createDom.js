//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

//todo2
const firstP = document.querySelector("p")
console.dir(firstP);

//todo3
const eachP = document.querySelectorAll("#para")
console.dir(eachP)

//todo4
const allP = document.querySelectorAll("p")
console.dir(allP);

//todo5
allP.forEach((paragraph, index) => {
    console.log(`paragraph ${index + 1}:`, paragraph.textContent);
    
})

//todo6
allP[3].textContent = "This is fourth paragraph"

//todo7
allP.forEach((paragraph, index) => {
    paragraph.setAttribute("id", `para-${index + 1}`)

    paragraph.classList.add(`paragraph-${index + 1}`)
    console.log(`id: ${paragraph.id}, class: ${paragraph.className}`);
    
})

//todo8
allP.forEach((para, indx) => {
    if(indx % 2 === 0 ){
        para.style.borderRadius = "5px"
        para.style.border = "3px solid pink"
        para.style.textAlign = "center"
        para.style.backgroundColor = "pink"
    } else {
        para.style.fontSize = "20px"
        para.style.fontWeight = "15px"
        para.style.border = "3px dotted purple"
         para.style.textAlign = "center"
         para.style.padding = "5px"
    }
})


//todo9
allP.forEach((para, index) => {
    if(index % 2 === 0){
        para.style.color = "green"
    } else {
        para.style.color = "red"
    }
})