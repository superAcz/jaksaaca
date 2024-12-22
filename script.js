var typed = new Typed(".input", {
    strings: ["Mobile Apps Developer", "Flutter Developer", "Front-End Developer"],
    typedSpeed: 10,
    backSpeed: 50,
    loop: true
});
const logosSlide = document.querySelector('.logos-slide');
const logos = document.querySelectorAll('.logos-slide img');
logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    logosSlide.appendChild(clone);
});

