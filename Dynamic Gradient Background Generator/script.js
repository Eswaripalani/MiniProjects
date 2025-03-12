const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copyBtn");

function updateGradient() {
    const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    document.body.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
}

// Listen for color input changes
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);

// Copy CSS to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cssCode.textContent);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy CSS", 2000);
});

// Initialize background on load
updateGradient();
