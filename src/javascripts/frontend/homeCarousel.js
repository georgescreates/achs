export function heroSectionCarousel() {
    const container = document.getElementById("main-level-article-thumbnails-container");
    const prevBtn = document.getElementById("to-prev-article-btn");
    const nextBtn = document.getElementById("to-next-article-btn");

    const titleElement = document.querySelector("#main-level-article-titles-container h2");
    const contentEleemnt = document.querySelector("#main-level-article-content")
    const thumbnails = document.querySelectorAll(".main-level-article-thumbnail-container");
    let currentIndex = 0;

    function updateTitle() {
        titleElement.textContent = titles[currentIndex] || "Untitled Article";
        contentEleemnt.textContent = contents[currentIndex] || "No provided content article"
    }

    const scrollAmount = container.clientWidth;

    const titles = [
        "Wapakoneta by Moonlight returns THIS Tuesday, July 15.",
        "Historical Society launches new archive tour series.",
        "Meet the people behind the Barn Project celebration.",
        "Downtown Luminaria walk lights up local landmarks.",
        "Historical Society launches new archive tour series."
    ];

    const contents = [
        "In addition to evening shopping, dining, and live music, don't miss  the Historical Society's Walking Tours: Learn about our rich local history with guided tours from Melissa Shroyer at 7 and 9 pm.  Tours begin at the northeast corner of the Courthouse block.  And check out the beautiful glow of moon-shaped Luminaria, gracing landmark buildings downtown.",

        "Wapakoneta by Moonlight is back, bringing a magical atmosphere to downtown with extended evening shopping, live music, and family-friendly festivities. Local businesses will keep their doors open late, offering special discounts and refreshments. Don’t miss the charming glow of moon-shaped luminarias lighting up the sidewalks and storefronts, adding a nostalgic ambiance to the night. It’s a perfect opportunity to reconnect with neighbors and discover what makes our community shine under the stars.",

        "The Auglaize County Historical Society is excited to introduce a brand-new archive tour series, offering visitors a behind-the-scenes look at the region’s treasured collections. From century-old photographs to personal letters and rare manuscripts, these tours uncover the stories that shaped our local heritage. Led by expert historians, each session will explore a unique theme, ensuring a fresh experience every time. Reserve your spot early—space is limited, and history awaits.",

        "Get to know the passionate individuals driving the Barn Project celebration—a tribute to the enduring spirit of rural craftsmanship and community pride. This feature highlights the volunteers, historians, and artists who are working tirelessly to preserve and promote our county’s iconic barns. Learn about their vision, the challenges they face, and why this project matters. Their dedication paints a powerful picture of how shared history can bring people together.",

        "This year’s Downtown Luminaria Walk transforms familiar streets into a glowing corridor of history and celebration. As dusk falls, hundreds of luminarias will line pathways, guiding visitors past some of the county’s most beloved landmarks. Along the route, local guides will share quick stories and fun facts about each site. Whether you're a first-time visitor or a longtime resident, the experience invites you to see Wapakoneta in a beautifully different light.",
    ]

    // Scroll behavior
    function updateButtons() {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft >= maxScrollLeft - 5; // small margin
    }

    function updateCarousel(direction) {
        const container = document.getElementById("main-level-article-thumbnails-container");

        if (direction === "next" && currentIndex < thumbnails.length - 1) {
            currentIndex++;
            container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
        } else if (direction === "prev" && currentIndex > 0) {
            currentIndex--;
            container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
        }

        updateTitle();
        updateButtons();
    }

    nextBtn.addEventListener("click", () => updateCarousel("next"));
    prevBtn.addEventListener("click", () => updateCarousel("prev"));

    // Listen to scroll to dynamically enable/disable buttons
    container.addEventListener("scroll", updateButtons);

    // Initial state
    updateButtons();
}