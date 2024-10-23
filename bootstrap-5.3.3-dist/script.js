let currentSlide = 0;
const slides = document.querySelectorAll('.card-slide');
const totalSlides = slides.length;
// slide
function showSlide(index) {
    // Wrap around the slides
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // calculation of slide
    const offset = -currentSlide * 100;
    document.querySelector('.card-wrapper').style.transform = `translateX(${offset}%)`;
}

// slide every  3 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// buttons for manually go forward or prev
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}



// scroll animation
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    
    if (window.scrollY > 100) {
        heroContent.classList.add('scrolled');
    } else {
        heroContent.classList.remove('scrolled');
    }
})
// option for reservation or delivery
function showOptions() {  
    const optionsList = document.getElementById("selection-options");  
    //hide
    optionsList.classList.toggle("hidden");
 }  
//    popup for reeservation or delievery
 function openPopup(type) {  
    const popup = document.getElementById("popup");  
    const reservationForm = document.getElementById("reservation-form");  
    const deliveryForm = document.getElementById("delivery-form");  
//    do not hide
    popup.classList.remove("hidden");  
//    what if reservation
    if (type === "reservation") {  
       reservationForm.classList.remove("hidden");  
       deliveryForm.classList.add("hidden");  
    //    what if delivery
    } else if (type === "delivery") {  
       deliveryForm.classList.remove("hidden");  
       reservationForm.classList.add("hidden");  
    }  
 }  
//    close pupuop
 function closePopup() {  
    const popup = document.getElementById("popup");  
    popup.classList.add("hidden");  
 }
   
 