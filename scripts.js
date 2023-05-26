let navAbout = document.querySelector(".about");
let navExperience = document.querySelector(".experience");
let navPortfolio = document.querySelector(".portfolio");
let navSkills = document.querySelector(".skills");
let navContacts = document.querySelector(".contacts");

let aboutElement = document.querySelector("#about");
let myPictureElement = document.querySelector("#my-picture");
let experienceElement = document.querySelector("#experience");
let portfolioElement = document.querySelector("#portfolio");
let skillsElement = document.querySelector("#skills");
let contactsElement = document.querySelector("#contacts");

window.addEventListener("scroll", () => {
    let aboutPosition = aboutElement.getBoundingClientRect();
    let myPicturePosition = myPictureElement.getBoundingClientRect();
    let experiencePosition = experienceElement.getBoundingClientRect();
    let portfolioPosition = portfolioElement.getBoundingClientRect();
    let skillsPosition = skillsElement.getBoundingClientRect();
    let contactsPosition = contactsElement.getBoundingClientRect();
    let bottomOfScreen = window.innerHeight;
    // console.log(contactsPosition);
    // console.log(bottomOfScreen);

    if (myPicturePosition.top <= 65 && aboutPosition.bottom <= bottomOfScreen) {
        navAbout.classList.add("active");
        navExperience.classList.remove("active");
        navPortfolio.classList.remove("active");
        navSkills.classList.remove("active");
        navContacts.classList.remove("active");
    }
    if (experiencePosition.top <= 65 && experiencePosition.bottom <= bottomOfScreen) {
        navAbout.classList.remove("active");
        navExperience.classList.add("active");
        navPortfolio.classList.remove("active");
        navSkills.classList.remove("active");
        navContacts.classList.remove("active");
    }
    if (portfolioPosition.top <= 65 && portfolioPosition.bottom <= bottomOfScreen) {
        navAbout.classList.remove("active");
        navExperience.classList.remove("active");
        navPortfolio.classList.add("active");
        navSkills.classList.remove("active");
        navContacts.classList.remove("active");
    }
    if (skillsPosition.top <= 65 && skillsPosition.bottom <= bottomOfScreen) {
        navAbout.classList.remove("active");
        navExperience.classList.remove("active");
        navPortfolio.classList.remove("active");
        navSkills.classList.add("active");
        navContacts.classList.remove("active");
    }
    if (contactsPosition.bottom <= (bottomOfScreen + 150)) {
        navAbout.classList.remove("active");
        navExperience.classList.remove("active");
        navPortfolio.classList.remove("active");
        navSkills.classList.remove("active");
        navContacts.classList.add("active");
    }
});

    document.querySelector("footer").innerHTML = "Copyright &copy; " + new Date().getFullYear();

    function scrollToAboutPage() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    setInterval(function () {
        plusSlides(1)
    }, 5000);