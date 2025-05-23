document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-menu a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });
});

