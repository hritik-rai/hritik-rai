# Pythonic Portfolio Website 🐍

A modern, responsive portfolio website with a Python-inspired dark theme, built for data scientists and ML engineers. Features an interactive snake trail animation that follows your cursor!

## Features

- **🎨 Pythonic Design**: Dark theme with Python blue (#3776AB) and yellow (#FFD43B) accents
- **📱 Responsive**: Works perfectly on desktop and mobile devices
- **⚡ Interactive**: Snake trail cursor animation, typewriter effects, and hover animations
- **🐍 Python Snake Animation**: Procedural snake that follows mouse cursor with realistic golden python patterns
- **👋 Welcome Message**: Friendly greeting at the top of the page
- **🖼️ Profile Integration**: Real profile picture display in about section
- **🔧 Easy to Customize**: Simple configuration in JavaScript for easy updates
- **🚀 Performance Optimized**: Fast loading with modern web technologies
- **♿ Accessible**: Built with accessibility best practices

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with modern features
- **TailwindCSS**: Utility-first CSS framework via CDN
- **JavaScript**: Vanilla JS for interactivity and snake trail animation
- **HTML5 Canvas**: For procedural snake trail animation
- **Google Fonts**: Inter and JetBrains Mono fonts

## Quick Start

1. **Clone or Download** this repository
2. **Update Personal Information** (see instructions below)
3. **Open `index.html`** in your browser or deploy to any web hosting service

## Customization Guide

### 1. Personal Information

Update the following in `script.js`:

```javascript
// Line 5: Update the typewriter text
const config = {
    typewriterText: "Your custom tagline here",
    // ... rest of config
};
```

### 2. Skills Section

Edit the `skills` array in `script.js` (around line 8):

```javascript
skills: [
    { 
        name: "Your Skill", 
        version: "1.0+", 
        description: "Description of your skill", 
        icon: "🚀" 
    },
    // Add more skills...
]
```

### 3. Projects Section

Update the `projects` array in `script.js` (around line 21):

```javascript
projects: [
    {
        title: "Your Project Name",
        description: "Detailed description of your project...",
        technologies: ["Python", "TensorFlow", "etc"],
        github: "https://github.com/yourusername/project",
        demo: "https://your-demo-link.com",
        status: "Completed" // or "In Progress"
    },
    // Add more projects...
]
```

### 4. Snake Trail Animation

Customize the snake animation in `snake-trail.js`:

```javascript
// Adjust snake properties
const snakeSpeed = 0.02;  // Movement speed
const segmentCount = 15;  // Number of body segments
const colors = ["#D4AF37", "#B8860B", "#DAA520"]; // Golden python colors
```

### 5. Contact Information

Update your social links in the `setupEventListeners` function (around line 105):

```javascript
// Replace with your actual social media links
if (text.includes('LinkedIn')) {
    window.open('https://www.linkedin.com/in/hritik-rai-', '_blank');
} else if (text.includes('GitHub')) {
    window.open('https://github.com/Hritikrai55', '_blank');
} else if (text.includes('Email')) {
    window.open('mailto:hritikrai55@gmail.com', '_blank');
}
```

### 6. Profile Image

Replace the profile image in the About section:

```html
<!-- In index.html, update the image path: -->
<img src="pictures/profile.jpg" alt="Your Name" 
     class="w-full h-full object-cover">
```

Place your profile image in the `pictures/` directory.

### 7. Meta Tags and SEO

Update the meta tags in `index.html` head section:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Custom, Keywords">
<meta property="og:title" content="Your Name | Your Title">
```

### 8. Colors and Styling

Customize the color scheme in the Tailwind config (in `index.html`):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'python-blue': '#3776AB',     // Change to your preference
                'python-yellow': '#FFD43B',   // Change to your preference
                'neon-green': '#39FF14'       // Change to your preference
            }
        }
    }
}
```

## Deployment Options

### 1. GitHub Pages (Free)
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify (Free)
1. Drag and drop the project folder to [netlify.com](https://netlify.com)
2. Your site will be live instantly with a custom URL

### 3. Vercel (Free)
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Auto-deploy on every push

### 4. Traditional Web Hosting
Upload all files to your web hosting provider's public folder.

## File Structure

```
pythonic-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── snake-trail.js      # Snake trail animation
├── pictures/
│   └── profile.jpg     # Profile picture
└── README.md           # This file
```

## Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Performance Tips

1. **Optimize Images**: Compress profile images to reduce load time
2. **CDN**: TailwindCSS is loaded via CDN for faster loading
3. **Minification**: For production, consider minifying CSS and JS
4. **Caching**: Enable browser caching on your web server

## Customization Examples

### Adding a New Section

1. Add HTML in `index.html`:
```html
<section id="new-section" class="py-20 px-4">
    <!-- Your content -->
</section>
```

2. Add navigation link:
```html
<a href="#new-section" class="nav-link">New Section</a>
```

3. Update JavaScript if needed in `script.js`

### Changing Animation Speed

In `script.js`, modify the configuration:
```javascript
const config = {
    typewriterSpeed: 50, // Faster typing (lower = faster)
    // ...
};
```

### Adding New Skills

Simply add to the skills array:
```javascript
{
    name: "New Technology",
    version: "latest",
    description: "What this technology does",
    icon: "🎯"
}
```

## Troubleshooting

### Common Issues

1. **Fonts not loading**: Check internet connection (Google Fonts via CDN)
2. **TailwindCSS not working**: Ensure CDN link is correct
3. **JavaScript not working**: Check browser console for errors
4. **Mobile layout issues**: Test with browser dev tools

### Contact Form Integration

The contact form currently shows a demo message. To make it functional:

1. **Backend Integration**: Connect to your preferred backend (Node.js, Python, PHP)
2. **Form Services**: Use services like Formspree, Netlify Forms, or EmailJS
3. **Example with EmailJS**:
```javascript
// Replace the handleContactForm function with EmailJS integration
```

## Contributing

Feel free to submit issues, feature requests, or improvements!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Need Help?** 
- Check the browser console for any JavaScript errors
- Ensure all file paths are correct
- Test in different browsers
- Validate HTML/CSS using online validators

## Live Demo

🌐 **[View Live Portfolio](https://github.com/hritik-rai/hritik-rai)** 

---

**Built with ❤️ and Python aesthetics by Hritik Rai**

*© Made with ❤️ by Hritik Rai.*
