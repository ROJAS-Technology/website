document.addEventListener("DOMContentLoaded", function () {
    const epicenterHeading = document.querySelector("h3");

    if (epicenterHeading) {
        let estado = true;

        setInterval(function() {
            if (estado) {
                epicenterHeading.style.setProperty("background-color", "darkgreen", "important");
                epicenterHeading.style.setProperty("color", "#ffffff", "important");
            } else {
                epicenterHeading.style.setProperty("background-color", "#000599", "important");
                epicenterHeading.style.setProperty("color", "#ffffff", "important");
            }
            estado = !estado;
        }, 750);
    }
});
