document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-input");
    const categoryLinks = document.querySelectorAll(".category-link");
    const cards = document.querySelectorAll(".highlight-card, .more-card, .featured-card");

    // Add a subtle entrance effect to news cards.
    cards.forEach(function (card, index) {
        card.style.opacity = "0";
        card.style.transform = "translateY(18px)";

        setTimeout(function () {
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 60 * index);
    });

    // Prevent submitting an empty search.
    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", function (event) {
            if (searchInput.value.trim() === "") {
                event.preventDefault();
                searchInput.focus();
            }
        });
    }

    // Keyboard shortcut: press "/" to focus search.
    document.addEventListener("keydown", function (event) {
        if (event.key === "/" && document.activeElement !== searchInput) {
            event.preventDefault();
            searchInput.focus();
        }
    });

    // Add a pressed effect to category links.
    categoryLinks.forEach(function (link) {
        link.addEventListener("mousedown", function () {
            link.style.transform = "scale(0.97)";
        });

        link.addEventListener("mouseup", function () {
            link.style.transform = "scale(1)";
        });

        link.addEventListener("mouseleave", function () {
            link.style.transform = "scale(1)";
        });
    });
});