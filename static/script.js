document.addEventListener("DOMContentLoaded", function() {
    const cornerImage = document.getElementById("corner-image");
    const areas = document.querySelectorAll("area");

    // Hover images for each building
    const hoverImages = {
        "coming-soon": "../static/pink-coming-soon.png",
        "book": "../static/pink-book.png",
        "bar": "../static/pink-bar.png"
    };

    // Original dimensions of blue-corner.png
    const originalWidth = 1920;
    const originalHeight = 1080;

    // Add hover event listeners
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

        // Save original coordinates
        area.dataset.originalCoords = area.coords;
    });

    // Function to resize map coordinates based on current image dimensions
    function resizeMap() {
        const widthRatio = cornerImage.clientWidth / originalWidth;
        const heightRatio = cornerImage.clientHeight / originalHeight;

        areas.forEach(area => {
            const coords = area.dataset.originalCoords.split(",").map(Number);
            const scaledCoords = coords.map((coord, index) =>
                index % 2 === 0 ? Math.round(coord * widthRatio) : Math.round(coord * heightRatio)
            );
            area.coords = scaledCoords.join(",");
        });
    }

    // Listen for window resizing and call resizeMap initially
    window.addEventListener("resize", resizeMap);
    resizeMap();
});
