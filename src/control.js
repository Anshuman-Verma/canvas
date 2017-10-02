window.addEventListener('load', function() {
    const btnStart = document.querySelector("#start");

    btnStart.addEventListener("click", () => {
        document.querySelector(".initial-container").classList.add("hide");
    });
});
