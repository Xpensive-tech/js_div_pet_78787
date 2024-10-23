
// outercarousel
const carouselContainer = document.querySelector('.carouselOuter');
const carousel = document.querySelector('.inner');
const slides = document.querySelectorAll('.carouselInner');
let currentSlideIndex = 0;
let intervalId;


var myOuterCarousel = ()=>{
    const slideWidth = carouselContainer.offsetWidth;
    carousel.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`
    currentSlideIndex = (currentSlideIndex + 1) % slides.length
}
  var strtOuterCarousel = ()=>{
     setInterval(myOuterCarousel, 16000)
  };
  strtOuterCarousel()


const slideImg = document.getElementById('slideImg');
const slideImg2 = document.getElementById('slideImg2');
const slideImg3 = document.getElementById('slideImg3');
const slideInner = document.querySelector('.inner');
var img1 = slideImg.children;
var img2 = slideImg2.children;
var img3 = slideImg3.children;
const slideDuration = 6000;


//   Inner 1

let currentSlide = 0;

var nextSlide = () =>{
    img1[currentSlide].style.display = 'none';
    img2[currentSlide].style.display = 'none';
    img3[currentSlide].style.display = 'none';

    currentSlide =(currentSlide + 1) % img1.length;
    currentSlide =(currentSlide + 1) % img2.length;
    currentSlide =(currentSlide + 1) % img3.length;

    img1[currentSlide].style.display = 'block';
    img2[currentSlide].style.display = 'block';
    img3[currentSlide].style.display = 'block';
}
intervalId =  setInterval(nextSlide, slideDuration)

var startSlide = () =>{
};

// Initialize Inner Carousel
startSlide();

// Rotate Svg
var slideTxt = document.getElementById("slidetxt");
var mySpan = document.getElementById('mySpan');

// Rotate Function
var rotate =()  =>{
        mySpan.style.transform = "rotate(180deg)"
}

// Unrotate Function
var unrotate = () =>{
     mySpan.style.transform = "rotate(0)"
}

// Intialize Rotation
slideTxt.addEventListener('mouseover', rotate);
slideTxt.addEventListener('mouseout', unrotate)