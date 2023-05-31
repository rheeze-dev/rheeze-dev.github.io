const navAbout = document.querySelector(".about");
const navExperience = document.querySelector(".experience");
const navPortfolio = document.querySelector(".portfolio");
const navSkills = document.querySelector(".skills");
const navContacts = document.querySelector(".contacts");

const aboutElement = document.querySelector("#about");
const myPictureElement = document.querySelector("#my-picture");
const experienceElement = document.querySelector("#experience");
const portfolioElement = document.querySelector("#portfolio");
const skillsElement = document.querySelector("#skills");
const contactsElement = document.querySelector("#contacts");

window.addEventListener("scroll", () => {
    const aboutPosition = aboutElement.getBoundingClientRect();
    const myPicturePosition = myPictureElement.getBoundingClientRect();
    const experiencePosition = experienceElement.getBoundingClientRect();
    const portfolioPosition = portfolioElement.getBoundingClientRect();
    const skillsPosition = skillsElement.getBoundingClientRect();
    const contactsPosition = contactsElement.getBoundingClientRect();
    const bottomOfScreen = window.innerHeight;

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
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
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