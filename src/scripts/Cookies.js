const cookieSection = document.querySelector(".Cookies");

const cookieBox = document.querySelector(".Cookies #wrapper"),
    buttons = document.querySelectorAll(".Cookies #wrapper #buttons #button");

const executeCodes = () => {
    if(document.cookie.includes("codinglab")) return;
    cookieSection.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieSection.classList.remove("show");

            if (button.className == "acceptBtn") {
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener("load", executeCodes);