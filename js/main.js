// Core Engine for Spider-Verse 3.0

// Interactive Web Canvas
const canvas = document.getElementById('hero-web-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

if (ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let points = [];
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) {
            points.push({ x: e.pageX, y: e.pageY, life: 1 });
            if (points.length > 50) points.shift();
        }
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 0.5;

        for (let i = 0; i < points.length; i++) {
            points[i].life -= 0.01;
            if (points[i].life <= 0) {
                points.splice(i, 1);
                continue;
            }

            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}

// Countdown Logic
const targetDate = new Date('2026-03-15T09:00:00').getTime();
function updateTimer() {
    const diff = targetDate - new Date().getTime();
    if (diff > 0) {
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        if (document.getElementById('days')) document.getElementById('days').innerText = d.toString().padStart(2, '0');
        if (document.getElementById('hours')) document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    }
}
setInterval(updateTimer, 1000);
updateTimer();

// 3D Card Hover Effect (Global Delegation)
document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.hud-card, .glass-card');
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});

// Reset transform on mouse out
document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.hud-card, .glass-card');
    if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
});

// Handle Window Resize for Canvas
window.addEventListener('resize', () => {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
