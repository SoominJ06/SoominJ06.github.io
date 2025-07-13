function resizeAwardTitle() {
    if (document.body.clientWidth >= 800) {
        return;
    }
    if (!document.body.clientWidth <= 700) {
        return;
    }
    // calculate maximum height
    let maxHeight = 0;
    document.querySelectorAll(".awards_award_title").forEach((title) => {
        if (title.clientHeight > maxHeight) {
            maxHeight = title.clientHeight;
        }
    });
    // Set all award height to max
    document.querySelectorAll(".awards_award_title").forEach((title) => {
        title.style.height = `${maxHeight}px`;
    });
}

window.addEventListener("resize", () => {
    resizeAwardTitle();
});

document.addEventListener("DOMContentLoaded", () => {
    resizeAwardTitle();
});