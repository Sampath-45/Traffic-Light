let stop_color = document.getElementById("stopButton");
let ready_color = document.getElementById("readyButton");
let go_color = document.getElementById("goButton");
let stop_bulb = document.getElementById("stopLight")
let ready_bulb = document.getElementById("readyLight")
let go_bulb = document.getElementById("goLight")

function redColor() {
    stop_color.style.backgroundColor = "#cf1124";
    ready_color.style.backgroundColor = "#4b5069";
    go_color.style.backgroundColor = "#4b5069";
    stop_bulb.style.backgroundColor = "#cf1124";
    ready_bulb.style.backgroundColor = "#4b5069";
    go_bulb.style.backgroundColor = "#4b5069";
}

function yellowColor() {
    stop_color.style.backgroundColor = "#4b5069";
    ready_color.style.backgroundColor = "#f7c948";
    go_color.style.backgroundColor = "#4b5069";
    stop_bulb.style.backgroundColor = "#4b5069";
    ready_bulb.style.backgroundColor = "#f7c948";
    go_bulb.style.backgroundColor = "#4b5069";
}

function greenColor() {
    stop_color.style.backgroundColor = "#4b5069";
    ready_color.style.backgroundColor = "#4b5069";
    go_color.style.backgroundColor = "#199473";
    stop_bulb.style.backgroundColor = "#4b5069";
    ready_bulb.style.backgroundColor = "#4b5069";
    go_bulb.style.backgroundColor = "#199473";
}