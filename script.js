// Pythonic Portfolio JavaScript
// Author: Hritik Rai

// Configuration and Data
const config = {
    typewriterText: "Building intelligent systems with AI, Data, and Automation",
    aboutTypewriterText: "I'm a passionate Data Scientist and Machine Learning Engineer with expertise in building intelligent systems that solve real-world problems. I specialize in developing end-to-end ML solutions, from data preprocessing and model development to deployment and MLOps.",
    typewriterSpeed: 50,
    skills: [
        { name: "Python", version: "3.11+", description: "NumPy, Pandas, Matplotlib, Seaborn, EDA", icon: "🐍", pipCommand: "python" },
        { name: "Web Scraping", version: "latest", description: "Selenium, BeautifulSoup, API Integration, ETL Pipeline", icon: "🕷️", pipCommand: "beautifulsoup4" },
        { name: "SQL", version: "ANSI", description: "PostgreSQL, SQLAlchemy, Data Warehousing, Data Modelling", icon: "💾", pipCommand: "sqlalchemy" },
        { name: "Machine Learning", version: "latest", description: "Supervised, Unsupervised, Data Preprocessing, Feature Engineering", icon: "🤖", pipCommand: "scikit-learn" },
        { name: "Deep Learning", version: "2.13+", description: "TensorFlow, PyTorch, CNNs, RNNs, NLP, Transformers", icon: "🧠", pipCommand: "tensorflow" },
        { name: "MLOps", version: "latest", description: "Docker, Kubernetes, CI/CD, Model Monitoring, Model Deployment", icon: "⚙️", pipCommand: "mlflow" },
        { name: "GenAI", version: "latest", description: "LLMs, LangChain, RAG, Fine-tuning", icon: "🔗", pipCommand: "langchain" },
        { name: "Big Data", version: "latest", description: "PySpark, Hadoop, Kafka, HDFS", icon: "🌐", pipCommand: "pyspark" }
    ],
    projects: [
        {
            title: "LLM Bot Fine-Tuned on PDFs",
            description: "Built a domain-specific chatbot by fine-tuning Meta Llama-3 with LoRA on PDF documents. Integrated efficient training and deployed an interactive Gradio chat UI for real-time question answering.",
            technologies: ["Python", "Llama-3", "LoRA", "Gradio", "Fine-tuning"],
            github: "https://github.com/Hritikrai55/IndustryGPT-Specialized-LLM-Bot-Using-Pre-Trained-Models",
            status: "Completed"
        },
        {
            title: "DeepFER — Facial Emotion Recognition",
            description: "Built a real-time image-based emotion detection system using CNNs and transfer learning to classify seven emotions.",
            technologies: ["Python", "CNN", "Transfer Learning", "OpenCV", "TensorFlow"],
            github: "https://github.com/Hritikrai55/DeepFER-Facial-Emotion-Recognition-Using-Deep-Learning",
            status: "Completed"
        },
        {
            title: "Voyage Analytics — MLOps in Travel",
            description: "Built ML pipelines for flight price prediction, gender classification, and hotel recommendation with full MLOps deployment workflow.",
            technologies: ["Python", "MLOps", "Docker", "CI/CD", "ML Pipelines"],
            github: "https://github.com/Hritikrai55/Voyage-Analytics-Intergrating-MLOPS-in-Travel",
            status: "Completed"
        },
        {
            title: "Financial Forecasting Frontier",
            description: "Performed real-time financial analytics and predictive modeling using distributed frameworks like PySpark, Hadoop, and Hive.",
            technologies: ["PySpark", "Hadoop", "Hive", "Financial Analytics", "Big Data"],
            github: "https://github.com/Hritikrai55/Financial-Forecasting-Frontier-Distributed-ML",
            status: "Completed"
        },
        {
            title: "Seoul Bike Demand Prediction",
            description: "Forecasted hourly bike rental demand using regression models on the Seoul Bike Sharing dataset.",
            technologies: ["Python", "Regression", "Machine Learning", "Data Analysis"],
            github: "https://github.com/Hritikrai55/Bike_Sharing_Demand_Prediction__ML_Regression_Project",
            status: "Completed"
        },
        {
            title: "Integrated Retail Analytics",
            description: "Optimized store performance with ML-driven sales anomaly detection, segmentation, and demand forecasting.",
            technologies: ["Python", "Anomaly Detection", "Segmentation", "Demand Forecasting"],
            github: "https://github.com/Hritikrai55/Integrated-Retail-Analytics-for-Store-Optimization",
            status: "Completed"
        }
    ]
};

// DOM Elements
let navbar, mobileMenuBtn, mobileMenu, sections, navLinks;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    startTypewriterEffect();
    startAboutTypewriterEffect();
    generateSkillCards();
    generateProjectCards();
    setupScrollEffects();
    setupMobileMenu();
});

// Initialize DOM elements
function initializeElements() {
    navbar = document.getElementById('navbar');
    mobileMenuBtn = document.getElementById('mobile-menu-btn');
    mobileMenu = document.getElementById('mobile-menu');
    sections = document.querySelectorAll('section[id]');
    navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Contact form is now handled by Formspree - no JavaScript needed

    // Social links are now handled by HTML anchor tags with target="_blank"
}

// Typewriter effect for hero section
function startTypewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    const text = config.typewriterText;
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeCharacter, config.typewriterSpeed);
        }
    }

    // Start typing after a short delay
    setTimeout(typeCharacter, 1000);
}

// Typewriter effect for about section
function startAboutTypewriterEffect() {
    const aboutTypewriterElement = document.getElementById('about-typewriter');
    const aboutCursor = document.getElementById('about-cursor');
    const text = config.aboutTypewriterText;
    let index = 0;

    function typeAboutCharacter() {
        if (index < text.length) {
            aboutTypewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeAboutCharacter, config.typewriterSpeed);
        } else {
            // Hide cursor when typing is complete
            if (aboutCursor) {
                aboutCursor.style.display = 'none';
            }
        }
    }

    // Start typing after the main typewriter finishes (about 3 seconds delay)
    setTimeout(typeAboutCharacter, 3000);
}

// Generate skill cards
function generateSkillCards() {
    const skillsContainer = document.querySelector('#skills .grid');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = config.skills.map(skill => `
        <div class="skill-card package-card p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div class="flex items-center justify-between mb-4">
                <div class="text-2xl">${skill.icon}</div>
                <div class="text-xs font-mono text-gray-400">v${skill.version}</div>
            </div>
            <h3 class="text-lg font-mono font-semibold text-python-yellow mb-2">${skill.name}</h3>
            <p class="text-sm text-gray-300 mb-4">${skill.description}</p>
            <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-neon-green">pip install ${skill.pipCommand}</span>
                <div class="w-2 h-2 bg-neon-green rounded-full animate-pulse group-hover:bg-python-yellow"></div>
            </div>
        </div>
    `).join('');
}

// Generate project cards
function generateProjectCards() {
    const projectsContainer = document.querySelector('#projects .grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = config.projects.map(project => `
        <div class="project-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center space-x-2">
                    <div class="w-4 h-4 bg-python-blue rounded-full"></div>
                    <h3 class="text-xl font-semibold text-white group-hover:text-python-yellow transition-colors">${project.title}</h3>
                </div>
                <span class="px-2 py-1 text-xs font-mono rounded ${
                    project.status === 'Completed' 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-yellow-900 text-yellow-300'
                }">${project.status}</span>
            </div>
            
            <p class="text-gray-300 text-sm mb-4 leading-relaxed">${project.description}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
                ${project.technologies.map(tech => 
                    `<span class="px-2 py-1 bg-github-darker text-python-yellow text-xs font-mono rounded border border-gray-700">${tech}</span>`
                ).join('')}
            </div>
            
            <div class="flex space-x-4">
                <a href="${project.github}" target="_blank" class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-mono">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                </a>
            </div>
        </div>
    `).join('');
}

// Generate blog cards
function generateBlogCards() {
    const blogContainer = document.querySelector('#blog .grid');
    if (!blogContainer) return;

    blogContainer.innerHTML = config.blogPosts.map(post => `
        <div class="blog-card p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span class="text-xs text-gray-400 font-mono">${post.date}</span>
            </div>
            
            <h3 class="text-lg font-semibold text-python-yellow mb-3 group-hover:text-white transition-colors">${post.title}</h3>
            
            <div class="bg-github-darker p-4 rounded mb-4 font-mono text-sm text-gray-300 overflow-hidden">
                <pre class="whitespace-pre-wrap">${post.excerpt}</pre>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-2">
                    ${post.tags.map(tag => 
                        `<span class="px-2 py-1 bg-python-blue/20 text-python-blue text-xs rounded">#${tag}</span>`
                    ).join('')}
                </div>
                <span class="text-xs text-gray-400 font-mono">${post.readTime}</span>
            </div>
        </div>
    `).join('');
}

// Setup scroll effects and scrollspy
function setupScrollEffects() {
    let ticking = false;

    function updateScrollEffects() {
        const scrollY = window.pageYOffset;
        
        // Update navbar background
        if (scrollY > 50) {
            navbar.classList.add('bg-github-darker/95');
            navbar.classList.remove('bg-github-dark/90');
        } else {
            navbar.classList.add('bg-github-dark/90');
            navbar.classList.remove('bg-github-darker/95');
        }
        
        // Update active navigation link
        updateActiveNavLink();
        
        // Animate sections on scroll
        animateOnScroll();
        
        ticking = false;
    }

    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestScrollUpdate);
    
    // Initial call
    updateScrollEffects();
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .blog-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Setup mobile menu
function setupMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Contact form is now handled by Formspree - function removed

// Utility functions for animations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.addEventListener('DOMContentLoaded', () => {
        const animatableElements = document.querySelectorAll('.skill-card, .project-card, .blog-card, .terminal-container');
        animatableElements.forEach(el => {
            observer.observe(el);
        });
        
    });
}

// Console Easter egg
console.log(`
%c
██████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ███╗   ██╗██╗ ██████╗
██╔══██╗╚██╗ ██╔╝╚══██╔══╝██║  ██║██╔═══██╗████╗  ██║██║██╔════╝
██████╔╝ ╚████╔╝    ██║   ███████║██║   ██║██╔██╗ ██║██║██║     
██╔═══╝   ╚██╔╝     ██║   ██╔══██║██║   ██║██║╚██╗██║██║██║     
██║        ██║      ██║   ██║  ██║╚██████╔╝██║ ╚████║██║╚██████╗
╚═╝        ╚═╝      ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝
                                                                 
Welcome to my Pythonic Portfolio! 🐍
Built with ❤️ and lots of ☕
`, 'color: #3776AB; font-weight: bold;');

console.log('%cHey there, fellow developer! 👋\nInterested in the code? Check out the repository!', 'color: #FFD43B; font-size: 14px;');

