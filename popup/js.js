var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".popup__btn");
var close = document.querySelector(".popup__close");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup__hidden");
});

popup.addEventListener("click", function(event) {
    e = event || window.event
    if (e.target == this) {
        popup.classList.add("popup__hidden");
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup__hidden");
});