document.addEventListener("DOMContentLoaded", function() {
    const cornerImage = document.getElementById("corner-image");
    const areas = document.querySelectorAll("area");

    const hoverImages = {
        "coming-soon": "../static/pink-comingsoon.png",
        "book": "../static/pink-book.png",
        "bar": "../static/pink-bar.png"
    };

    areas.forEach(area => {
        area.addEventListener("mouseenter", function() {
            const building = area.dataset.building;
            if (hoverImages[building]) {
                cornerImage.src = hoverImages[building];
            }
        });

        area.addEventListener("mouseleave", function() {
            // Reset to the original image when not hovering
            cornerImage.src = "../static/blue-corner.png";
        });
    });
});
