# CSS Architecture Guide

This document explains the CSS structure and styling patterns used in the CMC Distance Education website.

## 📁 File Organization

### Main Stylesheet: `assets/css/modern-style.css`

The CSS is organized into the following sections:

1. **CSS Variables** (Lines 1-20)
2. **Base Styles** (Lines 21-50)
3. **Navigation** (Lines 51-200)
4. **Hero Section** (Lines 201-450)
5. **Course Sections** (Lines 451-700)
6. **Cards & Components** (Lines 701-900)
7. **Gallery** (Lines 901-1200)
8. **Testimonials** (Lines 1201-1500)
9. **Footer** (Lines 1501-1600)
10. **Utilities & Animations** (Lines 1601-1964)

---

## 🎨 CSS Variables (Custom Properties)

CSS variables allow for easy theming and consistent styling across the website.

```css
:root {
    --primary-color: #233e67;    /* Dark blue - used for headers and primary buttons */
    --secondary-color: #6c757d;  /* Gray - used for secondary text */
    --success-color: #198754;    /* Green - used for success states */
    --danger-color: #dc3545;     /* Red - used for important dates and errors */
    --dark-color: #212529;       /* Near black - used for body text */
    --light-bg: #f8f9fa;         /* Light gray - used for backgrounds */
}
```

### How to Use CSS Variables

```css
/* In your CSS */
.my-element {
    color: var(--primary-color);
    background-color: var(--light-bg);
}
```

### Changing the Color Scheme

To change the entire color scheme, simply modify the root variables:

```css
:root {
    --primary-color: #your-new-color;
}
```

All elements using `var(--primary-color)` will automatically update!

---

## 📐 Layout System

### Bootstrap Grid
The website uses Bootstrap 5's grid system:

```html
<!-- Full width container -->
<div class="container">
    <div class="row">
        <!-- Two equal columns on large screens -->
        <div class="col-lg-6">Content 1</div>
        <div class="col-lg-6">Content 2</div>
    </div>
</div>
```

### Common Column Patterns

| Class Combination | Behavior |
|-------------------|----------|
| `col-lg-6` | Half width on large screens, full width on smaller |
| `col-lg-8 mx-auto` | 8 columns centered |
| `col-lg-4 col-md-6` | 3 columns on large, 2 on medium, 1 on small |

---

## 🧭 Navigation Styles

### Desktop Navigation (992px+)

```css
.navbar {
    background: #012068 !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 15px rgba(0,0,0,0.3);
}

.nav-link {
    color: #ffffff !important;
    font-weight: 500;
}

.nav-link:hover {
    color: #ffd700 !important;  /* Gold on hover */
}
```

### Mobile Navigation (< 992px)

```css
@media (max-width: 991px) {
    .navbar-collapse {
        background: #233e67;
        padding: 1rem;
        border-radius: 8px;
        max-height: calc(100vh - 80px);
        overflow-y: auto;
    }
}
```

### Key Navigation Features

1. **Fixed Position**: Navigation stays at top while scrolling
2. **Dropdown Menus**: Custom styled dropdowns for course categories
3. **Mobile Hamburger**: Animated toggle button
4. **Scroll Lock**: Body scroll is disabled when mobile menu is open

---

## 🦸 Hero Section

### Background Animation

The hero section uses multiple CSS layers for visual effects:

```css
/* Base gradient */
.hero-section {
    background: radial-gradient(circle at 3% 25%, #0A2647 0%, #2C74B3 100%);
}

/* Animated overlay using ::before */
.hero-section::before {
    animation: gradientShift 15s ease-in-out infinite;
}

/* Floating particles using ::after */
.hero-section::after {
    background-image: radial-gradient(circle, white 2px, transparent 2px);
    animation: particlesFloat 25s linear infinite;
}
```

### Announcement Cards Animation

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeInUp 0.6s ease-out forwards;
}
```

---

## 🃏 Card Components

### Course Card Structure

```css
.course-card {
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.course-card .card-header {
    background: var(--primary-color);
    color: white;
    font-weight: 600;
    border-radius: 12px 12px 0 0;
}
```

### Card Usage Pattern

```html
<div class="card course-card">
    <div class="card-header">
        <i class="bi bi-check-circle-fill me-2"></i>Eligibility Criteria
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Requirement 1</li>
            <li class="list-group-item">Requirement 2</li>
        </ul>
    </div>
</div>
```

---

## 🖼️ Gallery Styles

### Gallery Grid

```css
.gallery-card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.gallery-card img {
    transition: transform 0.5s ease;
}

.gallery-card:hover img {
    transform: scale(1.1);
}
```

### Hover Overlay

```css
.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(35, 62, 103, 0.9);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-card:hover .gallery-overlay {
    opacity: 1;
}
```

### Lightbox Modal

```css
.gallery-lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.95);
    z-index: 9999;
    display: none;
}

.gallery-lightbox.active {
    display: flex;
}
```

---

## 💬 Testimonials Carousel

### Carousel Container

```css
.testimonials-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

.testimonial-item {
    flex: 0 0 100%;
    scroll-snap-align: start;
}
```

### Testimonial Card

```css
.testimonial-card-inner {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.testimonial-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-color);
}
```

---

## 📱 Responsive Design

### Mobile-First Approach

The CSS uses mobile-first design with `min-width` media queries:

```css
/* Mobile styles (default) */
.element {
    padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
    .element {
        padding: 2rem;
    }
}

/* Desktop and up */
@media (min-width: 992px) {
    .element {
        padding: 3rem;
    }
}
```

### Common Breakpoints

| Breakpoint | Size | Target Devices |
|------------|------|----------------|
| `sm` | 576px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 992px | Laptops |
| `xl` | 1200px | Desktops |
| `xxl` | 1400px | Large desktops |

---

## ✨ Animations

### Keyframe Animations

```css
/* Fade in from bottom */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Slide in from left */
@keyframes slideInRight {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
}

/* Pulse effect */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
```

### Transition Properties

```css
/* Smooth hover transitions */
.btn-custom {
    transition: all 0.3s ease;
}

/* Transform with shadow */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
```

### Accessibility: Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🛠️ Utility Classes

### Custom Button

```css
.btn-custom {
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
}
```

### Section Styling

```css
section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.2rem;
    color: var(--secondary-color);
}
```

---

## 🧹 Best Practices

### 1. Use Semantic Class Names
```css
/* Good */
.course-card { }
.testimonial-heading { }

/* Avoid */
.blue-box { }
.big-text { }
```

### 2. Organize Properties Alphabetically or by Type
```css
.element {
    /* Positioning */
    position: relative;
    top: 0;
    
    /* Box Model */
    display: flex;
    padding: 1rem;
    margin: 0;
    
    /* Typography */
    font-size: 1rem;
    color: #333;
    
    /* Visual */
    background: white;
    border-radius: 8px;
    
    /* Animation */
    transition: all 0.3s ease;
}
```

### 3. Use CSS Variables for Repeated Values
```css
/* Instead of */
.element1 { color: #233e67; }
.element2 { background: #233e67; }

/* Use */
.element1 { color: var(--primary-color); }
.element2 { background: var(--primary-color); }
```

---

## 🔍 Debugging Tips

1. **Inspect Element**: Right-click → Inspect to see applied styles
2. **Toggle Classes**: Uncheck CSS rules to see their effect
3. **Device Toolbar**: Test responsive designs in Chrome DevTools
4. **Computed Tab**: See final calculated values of CSS properties

---

*This guide covers the main CSS concepts used in the project. For specific styles, refer to the source code in [assets/css/modern-style.css](assets/css/modern-style.css)*
