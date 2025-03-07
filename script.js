const form = document.querySelector("form");

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Copied: ${text}`);
        })
        .catch(err => console.error("Failed to copy:", err));
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const colorSelected = document.getElementById("color-selected").value.slice(1);
    const modeSelected = document.getElementById("mode-picker").value;
    const colorsContainers = document.querySelectorAll(".scheme-colors");
    const codeContainers = document.querySelectorAll(".scheme-codes");

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${modeSelected}&count=5`)
        .then (res => res.json())
        .then (data => {
            let i = 0;
            colorsContainers.forEach(container => {
                const color = data.colors[i].hex.value;
                container.style.backgroundColor = color;
                container.onclick = () => copyToClipboard(color);
                i++;
            });
            let j = 0;
            codeContainers.forEach(container => {
                container.textContent = data.colors[j].hex.value;
                j++;
            });

        });
});

document.querySelectorAll(".scheme-colors").forEach(color => {
    color.addEventListener("mouseenter", () => {
        color.classList.add("border");
    });
    color.addEventListener("mouseleave", () => {
        color.classList.remove("border");
    });
})