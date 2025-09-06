# Portfolio Website Template 🐍

A beautiful, modern portfolio website template with a sleek dark theme and cool snake animation that follows your cursor! Perfect for showcasing your skills, projects, and experience in an engaging way.

## Features

- **🎨 Beautiful Design**: Clean, professional look with blue and yellow color scheme
- **📱 Mobile Friendly**: Looks great on phones, tablets, and computers
- **⚡ Interactive Elements**: Cool animations and effects that respond to your actions
- **🐍 Snake Animation**: Fun animated snake that follows your mouse cursor
- **👋 Personal Touch**: Welcome message and profile picture section
- **🔧 Easy to Update**: Change your information with simple text editing
- **🚀 Fast Loading**: Quick to load and smooth to use
- **♿ User Friendly**: Works well for everyone

## What's Inside

- **HTML**: The structure and content of your website
- **CSS**: The styling that makes everything look beautiful
- **JavaScript**: The code that makes things move and interact
- **Images**: Space for your profile picture and other photos

## How to Use This Template

1. **Download** the files to your computer
2. **Add Your Information** (follow the simple steps below)
3. **Open the website** by double-clicking `index.html` or upload to a website host

## How to Make It Yours

### 1. Change Your Name and Title

Open the `script.js` file and find this section:

```javascript
// Change this text to your own tagline
const config = {
    typewriterText: "Your Name | Your Job Title",
    // ... other settings
};
```

### 2. Add Your Skills

In the same `script.js` file, find the skills section and replace with your own:

```javascript
skills: [
    { 
        name: "Photography", 
        version: "Expert", 
        description: "Taking beautiful photos for events and portraits", 
        icon: "📸" 
    },
    { 
        name: "Writing", 
        version: "Advanced", 
        description: "Creating engaging content and stories", 
        icon: "✍️" 
    }
    // Add more of your skills...
]
```

### 3. Showcase Your Work

Add your projects in the projects section:

```javascript
projects: [
    {
        title: "My Amazing Project",
        description: "A brief description of what this project does and why it's awesome...",
        technologies: ["Web Design", "Photography", "etc"],
        github: "https://github.com/yourusername/project",
        demo: "https://your-website.com",
        status: "Completed" // or "In Progress"
    },
    // Add more projects...
]
```

### 4. Change Contact Information

Find the contact section in `script.js` and update with your own links:

```javascript
// Replace with your social media and contact info
if (text.includes('LinkedIn')) {
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
} else if (text.includes('GitHub')) {
    window.open('https://github.com/your-username', '_blank');
} else if (text.includes('Email')) {
    window.open('mailto:your-email@example.com', '_blank');
}
```

### 5. Add Your Photo

Replace the profile image:

1. Put your photo in the `pictures` folder
2. Name it `profile.jpg` (or update the filename in `index.html`)
3. Make sure it's a square image for the best look

### 6. Customize Colors (Optional)

If you want to change the color scheme, look for this section in `index.html`:

```javascript
colors: {
    'main-blue': '#3776AB',     // Change to your favorite blue
    'accent-yellow': '#FFD43B', // Change to your favorite yellow
    'highlight-green': '#39FF14' // Change to your favorite green
}
```


## How to Put Your Website Online

### Option 1: Simple Upload (Easiest)
1. Find a web hosting service (many offer free plans)
2. Upload all your files to their file manager
3. Your website will be live!

### Option 2: GitHub Pages (Free)
1. Create a free account at [github.com](https://github.com)
2. Upload your files to a new repository
3. Enable "Pages" in settings
4. Your website gets a free web address!

### Option 3: Netlify (Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your website is online instantly!

### Option 4: Ask Someone to Help
If this seems complicated, ask a tech-savvy friend to help you get it online!

## What Each File Does

```
portfolio-website/
├── index.html          # The main page of your website
├── styles.css          # Makes everything look pretty
├── script.js           # Your personal information and settings
├── snake-trail.js      # The cool snake animation
├── pictures/
│   └── profile.jpg     # Your profile picture goes here
└── README.md           # Instructions (this file)
```

## Works On

- ✅ Google Chrome (recent versions)
- ✅ Firefox (recent versions) 
- ✅ Safari (recent versions)
- ✅ Microsoft Edge (recent versions)
- ✅ Most modern web browsers

## Tips for Better Performance

1. **Keep Images Small**: Make sure your photos aren't huge files
2. **Use Good Internet**: The website loads faster with good connection
3. **Update Regularly**: Keep your content fresh and up-to-date
4. **Test on Different Devices**: Check how it looks on phones and tablets

## Need Help?

### Common Questions

**Q: How do I change the text that types out at the top?**
A: Open `script.js` and look for `typewriterText`. Change the text inside the quotes.

**Q: How do I add more skills?**
A: In `script.js`, find the `skills` section and copy the format to add new ones.

**Q: The website doesn't look right on my phone**
A: Try refreshing the page or clearing your browser cache.

**Q: How do I change my name everywhere?**
A: You'll need to update it in a few places in `script.js` and `index.html`.

### If Something Doesn't Work

1. **Text looks weird**: Make sure you have internet connection
2. **Website won't open**: Try a different web browser
3. **Snake animation not working**: Refresh the page
4. **Looks broken on mobile**: Try rotating your phone or updating your browser

## Share and Improve

Feel free to share this template with friends or suggest improvements!

## License

This template is free to use for personal and commercial projects.

---

**Still Need Help?** 
- Ask a friend who knows about websites
- Search online for tutorials about HTML and CSS
- Check that all your files are in the right folders

## What's New

- ✅ Easy-to-follow instructions for beginners
- ✅ Simplified language and examples
- ✅ Better organization of information
- ✅ More user-friendly customization guide

## Example Website

🌐 **[See What It Looks Like](https://hritik-rai.github.io/hritik-rai/)** 

---

**Made with ❤️ for everyone to use**

*A beautiful portfolio template for showcasing your work and skills*
