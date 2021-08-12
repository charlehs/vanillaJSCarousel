const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;


// Hide all slides

const hideAllSlides = () => {
    for (let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}


// Next Button

document.getElementById("carousel-button-next").addEventListener("click", (moveToNextSlide) =>{

    hideAllSlides()

    if (slidePosition === totalSlides - 1){
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("carousel-item-visible")
})


// Previous Button

document.getElementById("carousel-button-prev").addEventListener("click", (moveToPreviousSlide) =>{

    hideAllSlides()

    if (slidePosition === 0){
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    slides[slidePosition].classList.add("carousel-item-visible")
})