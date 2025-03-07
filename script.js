const form = document.querySelector("form");

function getColor() {
    const colorSelected = document.getElementById("color-selected").value;
    const modeSelected = document.getElementById("mode-picker").value;
    console.log(colorSelected , modeSelected);
    return colorSelected;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const colorSelected = document.getElementById("color-selected").value.slice(1);
    const modeSelected = document.getElementById("mode-picker").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${modeSelected}&count=5`)
        .then (res => res.json())
        .then (data => console.log(data))
});