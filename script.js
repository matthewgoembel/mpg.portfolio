// Matrix Effect Code
function createMatrixEffect() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    // Characters to simulate the Matrix Code
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;,.<>?/\\";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = []; // Array to store drop position

    // Initialize drops array
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Matrix Loop to animate the characters
    function matrixLoop() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fade effect for each frame

        ctx.fillStyle = "#00FF00"; // Green color
        ctx.font = fontSize + "px monospace"; // Monospace font for terminal effect

        // Loop through drops to simulate falling characters
        for (let i = 0; i < drops.length; i++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            // Reset the drop when it reaches the bottom and randomly start it again
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }

        // Continue the animation
        requestAnimationFrame(matrixLoop);
    }

    matrixLoop(); // Start the Matrix effect
}

// Create the Matrix Effect
createMatrixEffect();
