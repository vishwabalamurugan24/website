// Spider-Verse 3.0 Animation Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Advanced Web Shooter System
    let currentWebEffect = 1;
    let totalWebsShot = 0;

    function setWebEffect(effect) {
        currentWebEffect = parseInt(effect);
    }

    function shootWeb(targetX, targetY, sourceX, sourceY, container) {
        totalWebsShot++;
        const counter = document.getElementById('webCounter');
        if (counter) counter.textContent = totalWebsShot;

        // Factory for effects
        switch (currentWebEffect) {
            case 1: shootBasicWeb(targetX, targetY, sourceX, sourceY, container); break;
            case 2: shootWebSplash(targetX, targetY, sourceX, sourceY, container); break;
            case 3: shootWebBurst(targetX, targetY, sourceX, sourceY, container); break;
            case 4: shootWebNet(targetX, targetY, sourceX, sourceY, container); break;
            case 5: shootWebTrap(targetX, targetY, sourceX, sourceY, container); break;
            case 6: shootWebZap(targetX, targetY, sourceX, sourceY, container); break;
            case 7: shootWebWhip(targetX, targetY, sourceX, sourceY, container); break;
            case 8: shootWebShield(targetX, targetY, sourceX, sourceY, container); break;
            case 9: shootWebGrapple(targetX, targetY, sourceX, sourceY, container); break;
            case 10: shootWebStorm(targetX, targetY, sourceX, sourceY, container); break;
        }
    }

    function shootBasicWeb(targetX, targetY, sourceX, sourceY, container) {
        const webLine = document.createElement('div');
        webLine.className = 'web-line';
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const distance = Math.sqrt(dx * dx + dy * dy);
        webLine.style.left = sourceX + 'px';
        webLine.style.top = sourceY + 'px';
        webLine.style.transform = `rotate(${angle}deg)`;
        webLine.style.width = distance + 'px';
        container.appendChild(webLine);
        setTimeout(() => webLine.remove(), 500);
    }

    function shootWebSplash(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const dist = 50;
            const endX = targetX + Math.cos(angle) * dist;
            const endY = targetY + Math.sin(angle) * dist;
            const line = document.createElement('div');
            line.className = 'web-line';
            const dx = endX - targetX;
            const dy = endY - targetY;
            line.style.left = targetX + 'px';
            line.style.top = targetY + 'px';
            line.style.transform = `rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg)`;
            line.style.width = dist + 'px';
            line.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.8), transparent)';
            container.appendChild(line);
            setTimeout(() => line.remove(), 500);
        }
        const splash = document.createElement('div');
        splash.className = 'web-splash';
        splash.style.left = targetX + 'px';
        splash.style.top = targetY + 'px';
        container.appendChild(splash);
        setTimeout(() => splash.remove(), 500);
    }

    function shootWebBurst(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const speed = Math.random() * 60 + 40;
            const particle = document.createElement('div');
            particle.className = 'burst-particle';
            particle.style.left = targetX + 'px';
            particle.style.top = targetY + 'px';
            container.appendChild(particle);
            let start = Date.now();
            function move() {
                let progress = (Date.now() - start) / 500;
                if (progress < 1) {
                    particle.style.left = (targetX + Math.cos(angle) * speed * progress) + 'px';
                    particle.style.top = (targetY + Math.sin(angle) * speed * progress) + 'px';
                    particle.style.opacity = 1 - progress;
                    requestAnimationFrame(move);
                } else { particle.remove(); }
            }
            requestAnimationFrame(move);
        }
    }

    function shootWebNet(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const dot = document.createElement('div');
                dot.className = 'basic-web';
                dot.style.left = (targetX - 40 + i * 20) + 'px';
                dot.style.top = (targetY - 40 + j * 20) + 'px';
                container.appendChild(dot);
                setTimeout(() => dot.remove(), 1000);
            }
        }
    }

    function shootWebTrap(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 3; i++) {
            const circle = document.createElement('div');
            circle.className = 'trap-circle';
            circle.style.left = targetX + 'px'; circle.style.top = targetY + 'px';
            circle.style.width = (i * 30 + 30) + 'px'; circle.style.height = (i * 30 + 30) + 'px';
            container.appendChild(circle);
            setTimeout(() => circle.remove(), 1000);
        }
    }

    function shootWebZap(targetX, targetY, sourceX, sourceY, container) {
        let curX = sourceX, curY = sourceY;
        for (let i = 1; i <= 5; i++) {
            let nextX = sourceX + (targetX - sourceX) * (i / 5) + (Math.random() - 0.5) * 40;
            let nextY = sourceY + (targetY - sourceY) * (i / 5) + (Math.random() - 0.5) * 40;
            if (i === 5) { nextX = targetX; nextY = targetY; }
            const line = document.createElement('div');
            line.className = 'web-zap';
            line.style.left = curX + 'px'; line.style.top = curY + 'px';
            const dx = nextX - curX, dy = nextY - curY;
            line.style.transform = `rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg)`;
            line.style.width = Math.sqrt(dx * dx + dy * dy) + 'px';
            container.appendChild(line);
            setTimeout(() => line.remove(), 300);
            curX = nextX; curY = nextY;
        }
    }

    function shootWebWhip(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 10; i++) {
            const p = i / 10;
            const segment = document.createElement('div');
            segment.className = 'whip-segment';
            segment.style.left = (sourceX + (targetX - sourceX) * p) + 'px';
            segment.style.top = (sourceY + (targetY - sourceY) * p) + 'px';
            segment.style.transform = `rotate(${Math.sin(p * 10) * 30}deg)`;
            container.appendChild(segment);
            setTimeout(() => segment.remove(), 500);
        }
    }

    function shootWebShield(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                for (let j = 0; j < 12; j++) {
                    const angle = (j / 12) * Math.PI * 2;
                    const r = 30 + i * 15;
                    const dot = document.createElement('div');
                    dot.className = 'basic-web';
                    dot.style.left = (targetX + Math.cos(angle) * r) + 'px';
                    dot.style.top = (targetY + Math.sin(angle) * r) + 'px';
                    container.appendChild(dot);
                    setTimeout(() => dot.remove(), 500);
                }
            }, i * 100);
        }
    }

    function shootWebGrapple(targetX, targetY, sourceX, sourceY, container) {
        shootBasicWeb(targetX, targetY, sourceX, sourceY, container);
        const g = document.createElement('div');
        g.className = 'grapple-point';
        g.style.left = targetX + 'px'; g.style.top = targetY + 'px';
        container.appendChild(g);
        setTimeout(() => g.remove(), 1000);
    }

    function shootWebStorm(targetX, targetY, sourceX, sourceY, container) {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const angle = Math.random() * Math.PI * 2;
                const particle = document.createElement('div');
                particle.className = 'storm-particle';
                particle.style.width = particle.style.height = (Math.random() * 6 + 2) + 'px';
                container.appendChild(particle);
                let start = Date.now();
                function move() {
                    let p = (Date.now() - start) / 800;
                    if (p < 1) {
                        const spiral = p * Math.PI * 4;
                        particle.style.left = (targetX + Math.cos(angle + spiral) * 80 * p) + 'px';
                        particle.style.top = (targetY + Math.sin(angle + spiral) * 80 * p) + 'px';
                        particle.style.opacity = 1 - p;
                        requestAnimationFrame(move);
                    } else { particle.remove(); }
                }
                requestAnimationFrame(move);
            }, i * 30);
        }
    }

    // Global Click Listener for Web Shooter
    document.addEventListener('mousedown', (e) => {
        // Don't shoot if clicking on buttons or links
        if (e.target.closest('button, a, input, select, textarea')) return;

        const container = document.body;
        const sourceX = window.innerWidth / 2;
        const sourceY = window.innerHeight;
        shootWeb(e.clientX, e.clientY, sourceX, sourceY, container);
    });

    // Handle Effect Selection (e.g., from keys 1-0)
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '9') setWebEffect(e.key);
        if (e.key === '0') setWebEffect(10);
    });

    // 2. Spider-Sense Overlay (Global Delegation)
    let sense = document.querySelector('.spider-sense-overlay');
    if (!sense) {
        sense = document.createElement('div');
        sense.className = 'spider-sense-overlay';
        document.body.appendChild(sense);
    }

    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('button, a');
        if (target) {
            sense.classList.add('spider-sense-active');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('button, a');
        if (target) {
            sense.classList.remove('spider-sense-active');
        }
    });

    // 4. UI Kit - Spider-Sense Waves
    document.addEventListener('click', (e) => {
        const area = e.target.closest('.spider-sense-area');
        if (area) {
            let waves = area.querySelector('.sense-waves');
            if (!waves) {
                waves = document.createElement('div');
                waves.className = 'sense-waves';
                waves.innerHTML = '<span></span><span></span><span></span>';
                area.appendChild(waves);
            }
            // Trigger animation restart if needed (though infinite by default)
        }
    });

    // 6. Advanced 3D Effects Initialization
    function init3DEffects() {
        // Web Spiral Generation
        document.querySelectorAll('.web-spiral').forEach(spiral => {
            if (spiral.children.length === 0) {
                for (let i = 0; i < 60; i++) {
                    const point = document.createElement('div');
                    point.className = 'spiral-point';
                    const angle = (i / 30) * Math.PI * 10;
                    const radius = 30 + (i * 1.5);
                    const height = (i - 30) * 2;
                    point.style.transform = `translateX(-50%) translateY(-50%) translateZ(${height}px) rotateY(${angle}rad) translateX(${radius}px)`;
                    spiral.appendChild(point);
                }
            }
        });

        // Parallax Scenes
        document.querySelectorAll('.parallax-scene').forEach(scene => {
            if (!scene.dataset.init) {
                scene.dataset.init = "true";
                const layers = scene.querySelectorAll('.parallax-layer');
                scene.addEventListener('mousemove', (e) => {
                    const rect = scene.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    layers.forEach(layer => {
                        const speed = layer.dataset.speed || 1;
                        layer.style.transform = `translateX(${x * 40 * speed}px) translateY(${y * 40 * speed}px) translateZ(${speed * 20}px)`;
                    });
                });
            }
        });

        // Mouse Follow 3D
        document.querySelectorAll('.mouse-follow-3d').forEach(container => {
            if (!container.dataset.init) {
                container.dataset.init = "true";
                const layers = container.querySelectorAll('.follow-layer');
                container.addEventListener('mousemove', (e) => {
                    const rect = container.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    layers.forEach((layer, index) => {
                        const depth = (index + 1) * 15;
                        layer.style.transform = `translateZ(${depth}px) rotateX(${-y * 30}deg) rotateY(${x * 30}deg)`;
                    });
                });
                container.addEventListener('mouseleave', () => {
                    layers.forEach(layer => layer.style.transform = '');
                });
            }
        });
    }

    // Add Instruction Badge if missing
    if (!document.querySelector('.instruction-badge')) {
        const badge = document.createElement('div');
        badge.className = 'instruction-badge';
        badge.innerText = '🕷️ MOVE MOUSE FOR 3D EFFECTS 🕷️';
        document.body.appendChild(badge);
    }

    // 7. 3D Background System
    function init3DBackground() {
        const bg = document.getElementById('spider3DBG');
        if (!bg || bg.dataset.init === "true") return;
        bg.dataset.init = "true";

        const layer1 = document.getElementById('layer1');
        const layer2 = document.getElementById('layer2');
        const layer3 = document.getElementById('layer3');
        const layer4 = document.getElementById('layer4');
        const mouseSpider = document.getElementById('mouseSpider');
        const scrollProgress = document.getElementById('scrollProgress');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;

            if (layer1) layer1.style.transform = `translateZ(-300px) scale(1.5) translateX(${x * 50}px) translateY(${y * 50}px)`;
            if (layer2) layer2.style.transform = `translateZ(-150px) scale(1.2) translateX(${x * 30}px) translateY(${y * 30}px)`;
            if (layer3) layer3.style.transform = `translateZ(0) scale(1) translateX(${x * -20}px) translateY(${y * -20}px)`;
            if (layer4) layer4.style.transform = `translateZ(150px) scale(0.8) translateX(${x * -40}px) translateY(${y * -40}px)`;

            if (mouseSpider) {
                mouseSpider.style.left = e.clientX + 'px';
                mouseSpider.style.top = e.clientY + 'px';
                mouseSpider.style.transform = `translate(-50%, -50%) rotate(${x * 30}deg)`;
            }
        });

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = winScroll / height;

            if (scrollProgress) scrollProgress.style.transform = `scaleX(${scrolled})`;
            if (layer2) layer2.style.transform = `translateZ(-150px) scale(1.2) translateY(${winScroll * 0.2}px)`;
        });

        function addWebStrand() {
            const strand = document.createElement('div');
            strand.className = 'web-strand';
            strand.style.left = Math.random() * 100 + '%';
            strand.style.top = Math.random() * 100 + '%';
            strand.style.height = Math.random() * 200 + 100 + 'px';
            strand.style.transform = `rotate(${Math.random() * 360}deg)`;
            strand.style.animation = `webGlow ${Math.random() * 3 + 2}s infinite`;
            bg.appendChild(strand);
            setTimeout(() => strand.remove(), 8000);
        }

        setInterval(addWebStrand, 2000);

        // Buildings floating animation
        bg.querySelectorAll('.building').forEach((building, index) => {
            building.style.animation = `buildingFloat ${5 + index}s infinite ease-in-out`;
        });
    }

    initMaskButtons();
    init3DEffects();
    init3DBackground();

    const observer = new MutationObserver(() => {
        initMaskButtons();
        init3DEffects();
        init3DBackground();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

// 4. Web-Wipe transition helper
window.pageTransition = function (url) {
    const wipe = document.getElementById('web-wipe') || createWipe();
    wipe.classList.add('wipe-active');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
};

function createWipe() {
    const wipe = document.createElement('div');
    wipe.id = 'web-wipe';
    wipe.innerHTML = `<svg width="200" height="200" viewBox="0 0 100 100"><path d="M50 10 L55 35 L80 30 L60 45 L90 70 L55 55 L50 90 L45 55 L10 70 L40 45 L20 30 L45 35 Z" fill="#e63746"/></svg>`;
    document.body.appendChild(wipe);
    return wipe;
}
