const input = document.querySelector("input");
const button = document.querySelector("button");

input.addEventListener("input", function () {
    if (input.value.length > 0) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }
});
