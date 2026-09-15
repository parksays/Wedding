// Cinematic falling rose petals
const petalLayer = document.querySelector(".petals");

function createPetal(initial = false) {
  if (!petalLayer) return;

  const petal = document.createElement("span");
  petal.className = "petal";

  const size = 6 + Math.random() * 10;
  const duration = 5.5 + Math.random() * 5.5;
  const drift = (Math.random() * 2 - 1) * 28;
  const rotation = Math.random() * 360;
  const opacity = 0.48 + Math.random() * 0.42;
  const blur = Math.random() < 0.18 ? (0.25 + Math.random() * 0.8) : 0;

  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty("--size", `${size}px`);
  petal.style.setProperty("--duration", `${duration}s`);
  petal.style.setProperty("--drift", `${drift}vw`);
  petal.style.setProperty("--rotation", `${rotation}deg`);
  petal.style.setProperty("--opacity", opacity.toFixed(2));
  petal.style.setProperty("--blur", `${blur}px`);

  if (initial) {
    petal.style.animationDelay = `${-(Math.random() * duration)}s`;
  }

  petalLayer.appendChild(petal);

  petal.addEventListener("animationend", () => petal.remove(), { once: true });
}

// Keep it elegant rather than overcrowded.
for (let i = 0; i < 20; i++) createPetal(true);

setInterval(() => {
  // Add 2–3 petals in small waves for a natural cinematic flow.
  const count = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < count; i++) {
    setTimeout(() => createPetal(false), i * 180);
  }
}, 650);

// Respect reduced-motion accessibility settings.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".petal").forEach(p => p.remove());
}
