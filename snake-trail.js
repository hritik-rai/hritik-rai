/**
 * Procedural Snake Trail Animation
 * Follows mouse cursor with smooth, slithering movement
 * Built for Pythonic Portfolio Website
 */

class SnakeTrail {
    constructor() {
        // ===== CUSTOMIZABLE SETTINGS =====
        this.SNAKE_LENGTH = 7;              // Longer, more intimidating snake
        this.SEGMENT_SIZE = 25;              // Much bigger segments for scary effect
        this.FOLLOW_SPEED = 0.03;            // Faster, more aggressive movement
        this.CURL_RADIUS = 40;               // Larger curling radius
        this.CURL_SPEED = 0.01;              // Slightly faster curling
        this.GLOW_INTENSITY = 15;            // More intense glow
        this.IDLE_THRESHOLD = 500;           // Longer before curling starts
        this.SCALE_PATTERN_SIZE = 4;         // Size of scale patterns
        
        // Golden Python Colors 
        this.SNAKE_PRIMARY = '#D4A574';      // Golden brown base
        this.SNAKE_SECONDARY = '#B8956A';    // Darker golden brown
        this.SNAKE_ACCENT = '#8B6914';       // Dark brown accents
        this.EYE_COLOR = '#FFD700';          // Golden eyes
        this.BELLY_COLOR = '#F5DEB3';        // Light cream belly
        this.SPOT_COLOR = '#8B4513';         // Dark brown spots
        this.SPOT_HIGHLIGHT = '#DEB887';     // Light spot highlights
        this.BACKGROUND_COLOR = '#0d1117';
        
        // ===== INTERNAL PROPERTIES =====
        this.canvas = null;
        this.ctx = null;
        this.snake = [];
        this.mouse = { x: 0, y: 0 };
        this.lastMouse = { x: 0, y: 0 };
        this.lastMoveTime = Date.now();
        this.isIdle = false;
        this.idleAngle = 0;
        this.animationId = null;
        this.breathingPhase = 0;             // For breathing animation
        this.scaleOffset = 0;                // For scale pattern animation
        
        this.init();
    }
    
    /**
     * Initialize the snake trail system
     */
    init() {
        this.createCanvas();
        this.initializeSnake();
        this.setupEventListeners();
        this.startAnimation();
        console.log('🐍 Snake Trail System Initialized');
    }
    
    /**
     * Create and setup the canvas element
     */
    createCanvas() {
        this.canvas = document.getElementById('snake-canvas');
        if (!this.canvas) {
            console.error('Snake canvas element not found!');
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        
        // Set initial mouse position to center of screen
        this.mouse.x = this.canvas.width / 2;
        this.mouse.y = this.canvas.height / 2;
    }
    
    /**
     * Initialize snake segments
     */
    initializeSnake() {
        this.snake = [];
        const startX = this.canvas.width / 2;
        const startY = this.canvas.height / 2;
        
        // Create snake segments starting from center
        for (let i = 0; i < this.SNAKE_LENGTH; i++) {
            const sizeMultiplier = i < 5 ? 1.2 : (1 - i * 0.015); // Bigger head section, gradual decrease
            this.snake.push({
                x: startX - (i * this.SEGMENT_SIZE * 0.8),
                y: startY,
                size: this.SEGMENT_SIZE * sizeMultiplier,
                opacity: Math.max(0.3, 1 - (i * 0.02)), // More visible segments
                angle: 0, // For rotation effects
                breathingScale: 1 // For breathing animation
            });
        }
    }
    
    /**
     * Setup mouse and touch event listeners
     */
    setupEventListeners() {
        // Mouse events
        document.addEventListener('mousemove', (e) => {
            this.updateMousePosition(e.clientX, e.clientY);
        });
        
        // Touch events for mobile
        document.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.updateMousePosition(touch.clientX, touch.clientY);
        });
        
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.updateMousePosition(touch.clientX, touch.clientY);
        });
        
        // Resize handler
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        
        // Visibility change handler (pause when tab is hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimation();
            } else {
                this.resumeAnimation();
            }
        });
    }
    
    /**
     * Update mouse position and reset idle state
     */
    updateMousePosition(x, y) {
        this.lastMouse.x = this.mouse.x;
        this.lastMouse.y = this.mouse.y;
        this.mouse.x = x;
        this.mouse.y = y;
        this.lastMoveTime = Date.now();
        this.isIdle = false;
    }
    
    /**
     * Resize canvas to match window size
     */
    resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.scale(dpr, dpr);
    }
    
    /**
     * Update snake segment positions
     */
    updateSnake() {
        const now = Date.now();
        
        // Update animation phases
        this.breathingPhase += 0.05;
        this.scaleOffset += 0.02;
        
        // Check if mouse is idle
        if (now - this.lastMoveTime > this.IDLE_THRESHOLD) {
            this.isIdle = true;
            this.idleAngle += this.CURL_SPEED;
        }
        
        // Update head position
        let targetX, targetY;
        
        if (this.isIdle) {
            // Create menacing hunting motion when idle
            const centerX = this.snake[0].x;
            const centerY = this.snake[0].y;
            targetX = centerX + Math.cos(this.idleAngle) * this.CURL_RADIUS * 1.5;
            targetY = centerY + Math.sin(this.idleAngle * 0.7) * this.CURL_RADIUS;
        } else {
            targetX = this.mouse.x;
            targetY = this.mouse.y;
        }
        
        // Aggressive movement for head
        this.snake[0].x += (targetX - this.snake[0].x) * this.FOLLOW_SPEED * 2.5;
        this.snake[0].y += (targetY - this.snake[0].y) * this.FOLLOW_SPEED * 2.5;
        
        // Update body segments - each follows with realistic snake physics
        for (let i = 1; i < this.snake.length; i++) {
            const segment = this.snake[i];
            const target = this.snake[i - 1];
            
            // Calculate distance and angle
            const dx = target.x - segment.x;
            const dy = target.y - segment.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            
            // Store angle for rendering
            segment.angle = angle;
            
            // Breathing animation for realism
            segment.breathingScale = 1 + Math.sin(this.breathingPhase + i * 0.1) * 0.1;
            
            if (distance > segment.size * 0.6) {
                // Move segment with snake-like undulation
                const undulation = Math.sin(now * 0.01 + i * 0.3) * (segment.size * 0.2);
                const targetX = target.x - Math.cos(angle) * segment.size * 0.6;
                const targetY = target.y - Math.sin(angle) * segment.size * 0.6 + undulation;
                
                segment.x += (targetX - segment.x) * this.FOLLOW_SPEED * (1.2 - i * 0.01);
                segment.y += (targetY - segment.y) * this.FOLLOW_SPEED * (1.2 - i * 0.01);
            }
        }
    }
    
    /**
     * Render the scary realistic snake
     */
    renderSnake() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.snake.length < 2) return;
        
        // Render in layers for realistic appearance
        this.renderShadow();           // Drop shadow for depth
        this.renderGlow();             // Menacing glow
        this.renderMainBody();         // Main snake body with scales
        this.renderBellyPattern();     // Belly scales
        this.renderScalePattern();     // Top scale pattern
        this.renderHead();             // Scary head with fangs
    }
    
    /**
     * Render drop shadow for depth
     */
    renderShadow() {
        for (let i = 1; i < this.snake.length; i++) {
            const segment = this.snake[i];
            const prevSegment = this.snake[i - 1];
            
            this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
            this.ctx.lineWidth = segment.size * segment.breathingScale * 1.1;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            
            this.ctx.beginPath();
            this.ctx.moveTo(prevSegment.x + 3, prevSegment.y + 3);
            this.ctx.lineTo(segment.x + 3, segment.y + 3);
            this.ctx.stroke();
        }
    }

    /**
     * Render subtle golden glow effect
     */
    renderGlow() {
        for (let i = 0; i < this.snake.length; i++) {
            const segment = this.snake[i];
            const intensity = i < 3 ? 0.8 : 0.4; // Subtle glow on head
            
            // Create soft golden glow
            const gradient = this.ctx.createRadialGradient(
                segment.x, segment.y, 0,
                segment.x, segment.y, segment.size * 2.5
            );
            
            const glowStrength = 0.2 + Math.sin(this.breathingPhase * 1.5) * 0.05;
            gradient.addColorStop(0, `rgba(212, 165, 116, ${segment.opacity * glowStrength * intensity})`);
            gradient.addColorStop(0.7, `rgba(184, 149, 106, ${segment.opacity * 0.1})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(segment.x, segment.y, segment.size * 2.5, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
    
    /**
     * Render main snake body with golden python texture
     */
    renderMainBody() {
        for (let i = 1; i < this.snake.length; i++) {
            const segment = this.snake[i];
            const prevSegment = this.snake[i - 1];
            
            // Create gradient for golden python coloring
            const gradient = this.ctx.createLinearGradient(
                segment.x - segment.size, segment.y - segment.size,
                segment.x + segment.size, segment.y + segment.size
            );
            
            // Golden brown gradient matching the image
            gradient.addColorStop(0, this.SNAKE_SECONDARY);
            gradient.addColorStop(0.3, this.SNAKE_PRIMARY);
            gradient.addColorStop(0.7, this.SNAKE_PRIMARY);
            gradient.addColorStop(1, this.SNAKE_SECONDARY);
            
            // Draw main body segment
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = segment.size * segment.breathingScale;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            
            this.ctx.beginPath();
            this.ctx.moveTo(prevSegment.x, prevSegment.y);
            this.ctx.lineTo(segment.x, segment.y);
            this.ctx.stroke();
        }
    }

    /**
     * Render belly pattern
     */
    renderBellyPattern() {
        for (let i = 1; i < this.snake.length; i++) {
            const segment = this.snake[i];
            const prevSegment = this.snake[i - 1];
            
            // Lighter belly color
            this.ctx.strokeStyle = this.BELLY_COLOR;
            this.ctx.lineWidth = segment.size * 0.6 * segment.breathingScale;
            this.ctx.lineCap = 'round';
            
            this.ctx.beginPath();
            this.ctx.moveTo(prevSegment.x, prevSegment.y);
            this.ctx.lineTo(segment.x, segment.y);
            this.ctx.stroke();
        }
    }

    /**
     * Render realistic golden python spots and patterns
     */
    renderScalePattern() {
        for (let i = 0; i < this.snake.length; i++) {
            const segment = this.snake[i];
            
            // Create realistic python spot pattern
            const spotPattern = Math.sin(i * 0.8 + this.scaleOffset * 0.5);
            const shouldDrawSpot = Math.abs(spotPattern) > 0.3;
            
            if (shouldDrawSpot) {
                // Large irregular spots like in the image
                const spotSize = segment.size * (0.3 + Math.abs(spotPattern) * 0.4);
                const spotX = segment.x + Math.sin(i * 1.2) * (segment.size * 0.3);
                const spotY = segment.y + Math.cos(i * 0.9) * (segment.size * 0.2);
                
                // Dark brown spot base
                this.ctx.fillStyle = `rgba(139, 69, 19, ${segment.opacity * 0.8})`;
                this.ctx.beginPath();
                this.ctx.ellipse(
                    spotX, spotY,
                    spotSize, spotSize * 0.8,
                    segment.angle || 0,
                    0, Math.PI * 2
                );
                this.ctx.fill();
                
                // Lighter spot center for depth
                this.ctx.fillStyle = `rgba(160, 82, 45, ${segment.opacity * 0.5})`;
                this.ctx.beginPath();
                this.ctx.ellipse(
                    spotX - spotSize * 0.2, spotY - spotSize * 0.2,
                    spotSize * 0.6, spotSize * 0.5,
                    segment.angle || 0,
                    0, Math.PI * 2
                );
                this.ctx.fill();
            }
            
            // Add smaller secondary spots for realism
            if (i % 3 === 0) {
                const smallSpotX = segment.x + Math.cos(i * 2.1) * (segment.size * 0.4);
                const smallSpotY = segment.y + Math.sin(i * 1.7) * (segment.size * 0.3);
                
                this.ctx.fillStyle = `rgba(139, 69, 19, ${segment.opacity * 0.6})`;
                this.ctx.beginPath();
                this.ctx.arc(smallSpotX, smallSpotY, segment.size * 0.15, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }
    
    /**
     * Render realistic golden python head
     */
    renderHead() {
        const head = this.snake[0];
        const breathingSize = head.size * head.breathingScale;
        
        // Calculate head direction
        const nextSegment = this.snake[1];
        const headAngle = nextSegment ? Math.atan2(head.y - nextSegment.y, head.x - nextSegment.x) : 0;
        
        this.ctx.save();
        this.ctx.translate(head.x, head.y);
        this.ctx.rotate(headAngle);
        
        // Head shadow
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.ctx.beginPath();
        this.ctx.ellipse(2, 2, breathingSize * 0.9, breathingSize * 0.7, 0, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Main head body - python shape
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, breathingSize);
        gradient.addColorStop(0, this.SNAKE_PRIMARY);
        gradient.addColorStop(0.6, this.SNAKE_SECONDARY);
        gradient.addColorStop(1, this.SNAKE_ACCENT);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, breathingSize * 0.9, breathingSize * 0.7, 0, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Snake nose/snout - more rounded
        const noseGradient = this.ctx.createRadialGradient(
            breathingSize * 0.3, 0, 0,
            breathingSize * 0.3, 0, breathingSize * 0.4
        );
        noseGradient.addColorStop(0, this.SNAKE_PRIMARY);
        noseGradient.addColorStop(1, this.SNAKE_SECONDARY);
        
        this.ctx.fillStyle = noseGradient;
        this.ctx.beginPath();
        this.ctx.ellipse(breathingSize * 0.3, 0, breathingSize * 0.4, breathingSize * 0.3, 0, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Head spots like in the image
        const headSpots = [
            { x: -breathingSize * 0.2, y: -breathingSize * 0.3, size: 0.15 },
            { x: breathingSize * 0.1, y: -breathingSize * 0.4, size: 0.12 },
            { x: -breathingSize * 0.4, y: breathingSize * 0.1, size: 0.18 },
            { x: breathingSize * 0.2, y: breathingSize * 0.2, size: 0.14 }
        ];
        
        headSpots.forEach(spot => {
            this.ctx.fillStyle = `rgba(139, 69, 19, 0.8)`;
            this.ctx.beginPath();
            this.ctx.ellipse(
                spot.x, spot.y,
                breathingSize * spot.size,
                breathingSize * spot.size * 0.8,
                Math.random() * Math.PI,
                0, Math.PI * 2
            );
            this.ctx.fill();
            
            // Spot highlight
            this.ctx.fillStyle = `rgba(160, 82, 45, 0.4)`;
            this.ctx.beginPath();
            this.ctx.ellipse(
                spot.x - breathingSize * spot.size * 0.3,
                spot.y - breathingSize * spot.size * 0.3,
                breathingSize * spot.size * 0.5,
                breathingSize * spot.size * 0.4,
                Math.random() * Math.PI,
                0, Math.PI * 2
            );
            this.ctx.fill();
        });
        
        // Realistic python eyes
        const eyeOffset = breathingSize * 0.25;
        const eyeSize = Math.max(2, breathingSize * 0.12);
        
        // Eye base
        this.ctx.fillStyle = '#2F4F2F';
        this.ctx.beginPath();
        this.ctx.arc(-eyeOffset, -eyeOffset * 0.6, eyeSize, 0, Math.PI * 2);
        this.ctx.arc(eyeOffset, -eyeOffset * 0.6, eyeSize, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Golden iris
        this.ctx.fillStyle = this.EYE_COLOR;
        this.ctx.beginPath();
        this.ctx.arc(-eyeOffset, -eyeOffset * 0.6, eyeSize * 0.7, 0, Math.PI * 2);
        this.ctx.arc(eyeOffset, -eyeOffset * 0.6, eyeSize * 0.7, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Vertical pupils (python characteristic)
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath();
        this.ctx.ellipse(-eyeOffset, -eyeOffset * 0.6, eyeSize * 0.2, eyeSize * 0.6, 0, 0, Math.PI * 2);
        this.ctx.ellipse(eyeOffset, -eyeOffset * 0.6, eyeSize * 0.2, eyeSize * 0.6, 0, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Eye highlights
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        this.ctx.beginPath();
        this.ctx.arc(-eyeOffset - eyeSize * 0.3, -eyeOffset * 0.6 - eyeSize * 0.3, eyeSize * 0.15, 0, Math.PI * 2);
        this.ctx.arc(eyeOffset - eyeSize * 0.3, -eyeOffset * 0.6 - eyeSize * 0.3, eyeSize * 0.15, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Subtle forked tongue (occasionally visible)
        if (Math.sin(this.breathingPhase * 2) > 0.9) {
            this.ctx.strokeStyle = '#CD853F';
            this.ctx.lineWidth = 1.5;
            
            this.ctx.beginPath();
            this.ctx.moveTo(breathingSize * 0.7, 0);
            this.ctx.lineTo(breathingSize * 1.1, -2);
            this.ctx.moveTo(breathingSize * 0.7, 0);
            this.ctx.lineTo(breathingSize * 1.1, 2);
            this.ctx.stroke();
        }
        
        this.ctx.restore();
    }
    
    /**
     * Main animation loop
     */
    animate() {
        this.updateSnake();
        this.renderSnake();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    /**
     * Start the animation
     */
    startAnimation() {
        if (!this.animationId) {
            this.animate();
        }
    }
    
    /**
     * Pause the animation
     */
    pauseAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    /**
     * Resume the animation
     */
    resumeAnimation() {
        if (!this.animationId) {
            this.startAnimation();
        }
    }
    
    /**
     * Destroy the snake trail system
     */
    destroy() {
        this.pauseAnimation();
        document.removeEventListener('mousemove', this.updateMousePosition);
        document.removeEventListener('touchstart', this.updateMousePosition);
        document.removeEventListener('touchmove', this.updateMousePosition);
        window.removeEventListener('resize', this.resizeCanvas);
        console.log('🐍 Snake Trail System Destroyed');
    }
}

// Initialize the snake trail when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure canvas is ready
    setTimeout(() => {
        window.snakeTrail = new SnakeTrail();
    }, 100);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.snakeTrail) {
        window.snakeTrail.destroy();
    }
});
