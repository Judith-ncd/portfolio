// js/script.js
document.addEventListener("DOMContentLoaded", function() {
    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");

    // Vérifiez que tous les éléments existent
    if (sidenav && openBtn && closeBtn) {
        openBtn.addEventListener("click", openNav);
        closeBtn.addEventListener("click", closeNav);

        console.log("JavaScript loaded and event listeners attached.");

        function openNav() {
            console.log("Opening navigation.");
            sidenav.classList.add("active");
        }

        function closeNav() {
            console.log("Closing navigation.");
            sidenav.classList.remove("active");
        }
    } else {
        console.error("One or more elements are not found:", { sidenav, openBtn, closeBtn });
    }
});
