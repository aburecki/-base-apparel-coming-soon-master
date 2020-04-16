const btn = document.querySelector("button");
const errorIcon = document.querySelector(".error");
const small = document.querySelector(".small");


btn.addEventListener("click", () => {
    console.log("działa");
    errorIcon.style.visibility = "visible";
    small.style.visibility = "visible";
})