//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const images = document.querySelectorAll("img")

images.forEach((image, indx) => {
    if(indx % 2 === 0){
        image.style.border = "5px dotted green"
    } else{
        image.style.border = "5px solid red"
    }
})