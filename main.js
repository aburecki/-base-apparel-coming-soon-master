const btn = document.querySelector("button");
const errorIcon = document.querySelector(".error");
const small = document.querySelector(".small");
const input = document.querySelector(".email");

btn.addEventListener("click", () => {
    console.log("działa");

    console.log(input.value);
    if (input.value.length != 0 && input.value.includes("@") && input.value.includes(".")) {
        input.value = "";
        window.location.reload();
    } else {
        errorIcon.style.visibility = "visible";
        small.style.visibility = "visible";
    }
})