# Getting Started Guide for Beginners

Welcome to the CMC Vellore Distance Education website project! This guide will help you understand the basics and get started with web development using this project.

## 🎯 What You'll Learn

1. How websites are structured
2. Understanding HTML, CSS, and JavaScript
3. How to make changes to this project
4. Common web development tools and practices

---

## 📖 Prerequisites

### Recommended Tools

| Tool | Purpose | Download |
|------|---------|----------|
| **VS Code** | Code editor | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Chrome/Firefox** | Browser with DevTools | Built-in |
| **Git** | Version control (optional) | [git-scm.com](https://git-scm.com/) |

### VS Code Extensions

Install these helpful extensions:
- **Live Server** - Preview website with auto-reload
- **Prettier** - Code formatting
- **HTML CSS Support** - Autocomplete
- **Bootstrap IntelliSense** - Bootstrap class suggestions

---

## 🌐 Understanding Websites

### The Three Languages of the Web

```
HTML (Structure)     →  The skeleton of the page
     ↓
CSS (Styling)        →  The appearance and layout
     ↓
JavaScript (Behavior) →  Interactive features
```

### Analogy: Building a House

| House Part | Web Equivalent | File Type |
|------------|----------------|-----------|
| Foundation & Walls | HTML | `.html` |
| Paint & Decorations | CSS | `.css` |
| Electricity & Plumbing | JavaScript | `.js` |

---

## 📂 Understanding This Project

### Quick Overview

```
courses_110125_v1/
├── index.html          ← Main page (start here!)
├── applications/       ← Application forms
├── assets/
│   ├── css/           ← Styling files
│   ├── js/            ← JavaScript files
│   └── img/           ← Images
├── attachments/       ← PDF documents
└── docs/              ← Documentation (you are here!)
```

### What Each File Does

#### index.html
The main entry point. Contains:
- All course information
- Navigation menu
- Gallery
- Testimonials
- Contact information

#### assets/css/modern-style.css
Controls the appearance:
- Colors and fonts
- Layout and spacing
- Animations
- Responsive design

#### assets/js/modern-scripts.js
Adds interactivity:
- Smooth scrolling
- Mobile menu toggle
- Gallery filtering
- Carousel animations

---

## 🚀 Getting Started

### Step 1: Open the Project

1. Download or clone this project
2. Open VS Code
3. File → Open Folder → Select `courses_110125_v1`

### Step 2: Preview the Website

**Option A: Using Live Server (Recommended)**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"
4. Browser opens automatically!

**Option B: Direct Opening**
1. Find `index.html` in File Explorer/Finder
2. Double-click to open in browser

### Step 3: Make Your First Edit

1. Open `index.html` in VS Code
2. Find line ~113: `<h1 class="display-3 fw-bold mb-5">ANNOUNCEMENTS</h1>`
3. Change "ANNOUNCEMENTS" to "HELLO WORLD"
4. Save the file (Ctrl+S / Cmd+S)
5. See the change in your browser!

---

## 📝 HTML Basics

### What is HTML?

HTML (HyperText Markup Language) uses **tags** to structure content:

```html
<tagname>Content goes here</tagname>
```

### Common HTML Tags

```html
<!-- Headings (h1 is largest, h6 is smallest) -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Links -->
<a href="https://example.com">Click here</a>
<a href="#section-id">Jump to section</a>

<!-- Images -->
<img src="path/to/image.jpg" alt="Description">

<!-- Lists -->
<ul>
    <li>Unordered item 1</li>
    <li>Unordered item 2</li>
</ul>

<ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
</ol>

<!-- Divisions (containers) -->
<div class="container">
    Content inside a container
</div>

<!-- Sections -->
<section id="my-section">
    Section content
</section>
```

### HTML Attributes

```html
<!-- Attributes add extra information to elements -->
<element attribute="value">

<!-- Common attributes -->
<a href="url">                    <!-- Link destination -->
<img src="image.jpg" alt="desc">  <!-- Image source and description -->
<div id="unique-id">              <!-- Unique identifier -->
<div class="style-class">         <!-- CSS class for styling -->
```

---

## 🎨 CSS Basics

### What is CSS?

CSS (Cascading Style Sheets) controls how HTML elements look:

```css
selector {
    property: value;
}
```

### CSS Selectors

```css
/* Element selector - targets all elements of type */
p {
    color: blue;
}

/* Class selector - targets elements with class */
.highlight {
    background: yellow;
}

/* ID selector - targets single element with ID */
#header {
    font-size: 24px;
}

/* Combining selectors */
.card .title {
    font-weight: bold;
}
```

### Common CSS Properties

```css
/* Colors */
color: #ff0000;           /* Text color */
background-color: white;   /* Background color */

/* Text */
font-size: 16px;          /* Text size */
font-weight: bold;        /* Bold text */
text-align: center;       /* Center text */

/* Spacing */
padding: 10px;            /* Space inside element */
margin: 20px;             /* Space outside element */

/* Size */
width: 100%;              /* Full width */
height: 300px;            /* Fixed height */

/* Borders */
border: 1px solid black;  /* Border around element */
border-radius: 10px;      /* Rounded corners */
```

### Modifying Colors in This Project

Open `assets/css/modern-style.css` and find:

```css
:root {
    --primary-color: #233e67;  /* Change this color */
}
```

Try changing `#233e67` to:
- `#ff0000` (red)
- `#00ff00` (green)
- `#007bff` (blue)

---

## ⚡ JavaScript Basics

### What is JavaScript?

JavaScript makes websites interactive:

```javascript
// This is a comment

// Variables store data
let name = "World";
const greeting = "Hello";

// Functions perform actions
function sayHello() {
    alert("Hello, World!");
}

// Events trigger actions
button.addEventListener('click', function() {
    alert('Button was clicked!');
});
```

### Common JavaScript in This Project

```javascript
// Scroll to element smoothly
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

// Show/hide elements
element.classList.add('show');
element.classList.remove('show');

// Change content
element.textContent = 'New text';
```

---

## 🔧 Common Tasks

### Task 1: Add a New Announcement

1. Open `index.html`
2. Find the hero section (around line 110)
3. Copy an existing announcement block:

```html
<div class="mb-4 animate-fade-in">
    <h3 class="h4 mb-3">Your New Announcement!</h3>
    <a href="#section-id" class="btn btn-light btn-lg btn-custom">
        <i class="bi bi-arrow-right-circle me-2"></i>Learn More
    </a>
</div>
```

4. Paste it in the desired position
5. Change the text and link

### Task 2: Change a Course Fee

1. Open `index.html`
2. Use Ctrl+F (Cmd+F on Mac) to search
3. Type the course name (e.g., "PGDFM")
4. Find the fee section
5. Update the amount

### Task 3: Add a New Image to Gallery

1. Add your image to `assets/img/gallery/`
2. Open `index.html`
3. Find the gallery section (search for "galleryGrid")
4. Add this code:

```html
<div class="col-lg-4 col-md-6 gallery-item" data-year="2026">
    <div class="gallery-card">
        <img src="assets/img/gallery/your-image.jpg" alt="Description" class="img-fluid">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h5>Event Title</h5>
                <p>Event Description</p>
            </div>
        </div>
    </div>
</div>
```

### Task 4: Change the Navbar Color

1. Open `assets/css/modern-style.css`
2. Search for `.navbar`
3. Find `background: #012068`
4. Change to your preferred color

---

## 🛠️ Developer Tools

### Opening DevTools

- **Chrome/Edge**: Press F12 or Right-click → Inspect
- **Firefox**: Press F12 or Right-click → Inspect Element
- **Safari**: Enable in Preferences → Advanced → Show Develop menu

### Using DevTools

#### Elements Tab
- See HTML structure
- Click elements to select them
- Modify HTML/CSS live (changes are temporary)

#### Console Tab
- See JavaScript errors
- Test JavaScript code
- Debug issues

#### Network Tab
- See all loaded resources
- Check for failed requests
- Monitor page performance

#### Device Mode
- Test responsive design
- Simulate mobile devices
- Toggle with phone icon

---

## 📚 Bootstrap Quick Reference

This project uses Bootstrap 5. Here are commonly used classes:

### Layout

```html
<!-- Container -->
<div class="container">         <!-- Centered with padding -->
<div class="container-fluid">   <!-- Full width -->

<!-- Grid -->
<div class="row">               <!-- Row container -->
<div class="col-lg-6">          <!-- 6 columns on large screens -->
<div class="col-md-4">          <!-- 4 columns on medium screens -->
```

### Spacing

```html
<!-- Margin (m) and Padding (p) -->
<!-- t=top, b=bottom, s=start(left), e=end(right), x=horizontal, y=vertical -->
<div class="mt-3">    <!-- Margin top 3 -->
<div class="mb-5">    <!-- Margin bottom 5 -->
<div class="p-4">     <!-- Padding all sides 4 -->
<div class="px-2">    <!-- Padding horizontal 2 -->

<!-- Values: 0, 1, 2, 3, 4, 5 -->
```

### Text

```html
<p class="text-center">Centered text</p>
<p class="text-primary">Primary color</p>
<p class="fw-bold">Bold text</p>
<p class="fs-4">Larger font size</p>
```

### Buttons

```html
<a class="btn btn-primary">Primary</a>
<a class="btn btn-secondary">Secondary</a>
<a class="btn btn-outline-primary">Outlined</a>
<a class="btn btn-lg">Large button</a>
```

---

## ❓ Troubleshooting

### Changes Not Showing?

1. **Clear browser cache**: Ctrl+Shift+R (Cmd+Shift+R on Mac)
2. **Check file is saved**: Look for dot on tab in VS Code
3. **Check correct file**: Make sure you're editing the right file

### Page Looks Broken?

1. Check for syntax errors in HTML (missing `>` or `"`)
2. Check CSS file is loading (no 404 errors in Network tab)
3. Check JavaScript console for errors

### Images Not Loading?

1. Check file path is correct
2. Check file exists in the folder
3. Check file extension matches (`.jpg` vs `.jpeg`)

---

## 📖 Learning Resources

### Free Online Courses
- [freeCodeCamp](https://www.freecodecamp.org/) - Free coding curriculum
- [MDN Web Docs](https://developer.mozilla.org/) - Reference documentation
- [W3Schools](https://www.w3schools.com/) - Tutorials with examples

### Video Tutorials
- [Traversy Media](https://www.youtube.com/c/TraversyMedia) - Web development
- [Kevin Powell](https://www.youtube.com/kepowob) - CSS tutorials
- [Net Ninja](https://www.youtube.com/c/TheNetNinja) - Various technologies

### Practice
- Inspect websites you like using DevTools
- Try to recreate simple layouts
- Modify this project and see what happens

---

## 🎉 Next Steps

1. **Read the other documentation files:**
   - [CSS-GUIDE.md](CSS-GUIDE.md) - Detailed CSS explanation
   - [JAVASCRIPT-GUIDE.md](JAVASCRIPT-GUIDE.md) - JavaScript features
   - [HTML-GUIDE.md](HTML-GUIDE.md) - HTML structure

2. **Make small changes** to the project and observe results

3. **Use DevTools** to explore how different parts work

4. **Build something new** using what you've learned!

---

*Remember: The best way to learn is by doing. Don't be afraid to experiment!*
