let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;

    // Small scale animation
    countEl.style.transform = "scale(1.3)";
    setTimeout(() => {
        countEl.style.transform = "scale(1)";
    }, 150);
}

function save() {
    if (count === 0) return; // Avoid saving zero
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;

    // Optional: you can add a confetti effect here
    // confetti();
}
