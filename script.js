window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    if (scrollPos < 600) {
        document.body.style.backgroundColor = "#000"; // black
    } 
    else if (scrollPos < 1400) {
        document.body.style.backgroundColor = "#1a1a1a"; // dark gray
    }
    else if (scrollPos < 2200) {
        document.body.style.backgroundColor = "#2e2e2e"; // medium gray
    }
    else {
        document.body.style.backgroundColor = "#444"; // light gray
    }
});
