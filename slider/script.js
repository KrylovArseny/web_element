let offset = 0
let width = 1180
let img = document.querySelector('#slider_ars').children
let count = img.length - 1
const sliderLine = document.querySelector('#slider_ars')
const slider_ars_point = document.querySelector('#slider_ars_point')

for (i = 0; i < img.length; i++) {
    if (i == 0) {
        let div = document.createElement("div");
        div.className = "ars_dot";
        div.classList.add("active");
        div.setAttribute("data", i)
        slider_ars_point.appendChild(div);
    } else {
        let div = document.createElement("div");
        div.className = "ars_dot";
        div.setAttribute("data", i)
        slider_ars_point.appendChild(div);
    }
}

document.querySelector('#slider_ars_next').addEventListener('click', function() {
    offset = offset + width
    if (offset > width * count) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
    let el = document.querySelectorAll(".ars_dot")
    for (i = 0; i < el.length; i++) {

        if (el[i].classList.contains('active')) {
            el[i].classList.remove("active")
        }

        if (el[i].getAttribute('data') == offset / width) {
            el[i].classList.add("active")
        }
    }
});

document.querySelector('#slider_ars_prev').addEventListener('click', function() {
    offset = offset - width
    if (offset < 0) {
        offset = width * count
    }
    sliderLine.style.left = -offset + 'px'
    let el = document.querySelectorAll(".ars_dot")
    for (i = 0; i < el.length; i++) {

        if (el[i].classList.contains('active')) {
            el[i].classList.remove("active")
        }

        if (el[i].getAttribute('data') == offset / width) {
            el[i].classList.add("active")
        }
    }
});

let ars_dot = document.querySelectorAll('.ars_dot')
for (i = 0; i < ars_dot.length; i++) {
    ars_dot[i].addEventListener('click', function() {
        let data = this.getAttribute('data')
        offset = width * data
        if (data == 0) {
            offset = 0
        }
        sliderLine.style.left = -offset + 'px'
        let el = document.querySelectorAll(".ars_dot")
        for (i = 0; i < el.length; i++) {
            if (el[i].classList.contains('active')) {
                el[i].classList.remove("active")
            }
        }
        this.classList.add("active")
    });
}