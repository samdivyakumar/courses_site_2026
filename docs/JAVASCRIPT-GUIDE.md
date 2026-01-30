# JavaScript Guide

This document explains the JavaScript functionality used in the CMC Distance Education website.

## 📁 File Organization

### Main Script: `assets/js/modern-scripts.js`

The JavaScript is organized using the **Module Pattern** with an IIFE (Immediately Invoked Function Expression):

```javascript
(function() {
    'use strict';
    
    // All code goes here
    // Variables and functions are scoped to this function
    
})();
```

---

## 🔧 Core Utility Functions

### Safe DOM Selection

These functions prevent errors when elements don't exist:

```javascript
/**
 * Safe querySelector - returns null if element not found
 * @param {string} selector - CSS selector
 * @returns {Element|null}
 */
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (e) {
        console.warn('Invalid selector:', selector);
        return null;
    }
}

/**
 * Safe querySelectorAll - returns empty array if elements not found
 * @param {string} selector - CSS selector
 * @returns {Element[]}
 */
function safeQuerySelectorAll(selector) {
    try {
        return Array.from(document.querySelectorAll(selector));
    } catch (e) {
        console.warn('Invalid selector:', selector);
        return [];
    }
}
```

### Accessibility Check

```javascript
/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
function prefersReducedMotion() {
    return window.matchMedia && 
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
```

### Debounce Function

Limits how often a function can be called (useful for scroll/resize events):

```javascript
/**
 * Debounce function - limits the rate at which a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function}
 */
function debounce(func, wait) {
    var timeout;
    return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
```

**Example Usage:**
```javascript
// Without debounce: fires on every scroll
window.addEventListener('scroll', handleScroll);

// With debounce: fires at most every 100ms
window.addEventListener('scroll', debounce(handleScroll, 100));
```

---

## 🚀 Initialization

All functionality is initialized when the DOM is ready:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    initSmoothScroll();
    initNavbarCollapse();
    initMobileDropdowns();
    initSectionTitleAnimations();
    initGalleryFilter();
    initTestimonialsCarousel();
});
```

---

## ⬆️ Back to Top Button

### How It Works

1. Button appears when user scrolls past 300px
2. Clicking scrolls smoothly to top

```javascript
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;  // Guard clause - exit if element doesn't exist

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scrolling
        });
    });
}
```

### HTML Required

```html
<div class="back-to-top" id="backToTop">
    <i class="bi bi-arrow-up"></i>
</div>
```

---

## 🔗 Smooth Scrolling

### How It Works

Intercepts clicks on anchor links and scrolls smoothly instead of jumping:

```javascript
function initSmoothScroll() {
    // Get all anchor links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just # or empty
            if (href === '#' || href === '') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();  // Prevent default jump
                
                const offsetTop = target.offsetTop - 70;  // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
```

### Key Concepts

1. **Event Delegation**: Loops through all links at page load
2. **preventDefault()**: Stops the default browser behavior
3. **Offset Calculation**: Subtracts navbar height (70px) so content isn't hidden

---

## 📱 Mobile Navigation

### Body Scroll Lock

Prevents background scrolling when mobile menu is open:

```javascript
function toggleBodyScroll(isOpen) {
    if (isOpen) {
        document.body.classList.add('menu-open');
        // Store current scroll position
        document.body.dataset.scrollPosition = window.pageYOffset;
        document.body.style.top = `-${window.pageYOffset}px`;
    } else {
        document.body.classList.remove('menu-open');
        document.body.style.top = '';
        // Restore scroll position
        const scrollPosition = document.body.dataset.scrollPosition || 0;
        window.scrollTo(0, parseInt(scrollPosition));
    }
}
```

### Mobile Dropdown Toggle

On mobile, Bootstrap's dropdown is disabled and replaced with custom toggle:

```javascript
function initMobileDropdowns() {
    const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
    
    function isMobile() {
        return window.innerWidth < 992;
    }
    
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                e.stopPropagation();
                
                const dropdownMenu = this.nextElementSibling;
                const isOpen = dropdownMenu.classList.contains('show');
                
                // Close all other dropdowns
                document.querySelectorAll('.navbar .dropdown-menu.show')
                    .forEach(menu => menu.classList.remove('show'));
                
                // Toggle current dropdown
                if (!isOpen) {
                    dropdownMenu.classList.add('show');
                } else {
                    dropdownMenu.classList.remove('show');
                }
            }
        });
    });
}
```

---

## 🖼️ Gallery System

### Year Filter

Filters gallery images by year:

```javascript
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;  // Get data-filter attribute
            
            // Show/hide items
            galleryItems.forEach(function(item) {
                if (filter === 'all' || item.dataset.year === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}
```

### HTML Structure

```html
<!-- Filter Buttons -->
<button class="filter-btn active" data-filter="all">All Years</button>
<button class="filter-btn" data-filter="2025">2025</button>
<button class="filter-btn" data-filter="2024">2024</button>

<!-- Gallery Items -->
<div class="gallery-item" data-year="2025">
    <!-- Image content -->
</div>
```

### Lightbox Functionality

```javascript
// Open lightbox on image click
galleryCards.forEach(function(card, index) {
    card.addEventListener('click', function() {
        const img = this.querySelector('img');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('active');
        currentIndex = index;
    });
});

// Close lightbox
closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            lightbox.classList.remove('active');
            break;
        case 'ArrowRight':
            showNextImage();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
    }
});
```

---

## 💬 Testimonials Carousel

### Auto-scrolling Carousel

```javascript
function initTestimonialsCarousel() {
    const slider = document.querySelector('.testimonials-slider');
    const items = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    let autoplayInterval;
    
    // Auto-scroll every 5 seconds
    function startAutoplay() {
        autoplayInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % items.length;
            scrollToItem(currentIndex);
        }, 5000);
    }
    
    // Pause on hover
    slider.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', function() {
        startAutoplay();
    });
    
    // Navigate to specific item
    function scrollToItem(index) {
        const item = items[index];
        slider.scrollTo({
            left: item.offsetLeft,
            behavior: 'smooth'
        });
        updatePagination(index);
    }
    
    startAutoplay();
}
```

### Touch Swipe Support

```javascript
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (diff > swipeThreshold) {
        // Swipe left - go to next
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
    } else if (diff < -swipeThreshold) {
        // Swipe right - go to previous
        currentIndex = Math.max(currentIndex - 1, 0);
    }
    
    scrollToItem(currentIndex);
}
```

---

## 🎭 Intersection Observer (Scroll Animations)

Triggers animations when elements come into view:

```javascript
function initSectionTitleAnimations() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    const observerOptions = {
        threshold: 0.2,  // Trigger when 20% visible
        rootMargin: '0px 0px -100px 0px'  // Offset trigger point
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);  // Stop observing after animation
            }
        });
    }, observerOptions);

    sectionTitles.forEach(function(element) {
        observer.observe(element);
    });
}
```

### Key Concepts

1. **threshold**: Percentage of element that must be visible (0-1)
2. **rootMargin**: Offsets the trigger point from viewport edge
3. **unobserve**: Stops watching element after animation triggers

---

## 🛡️ Event Handling Best Practices

### Guard Clauses

Always check if elements exist before adding listeners:

```javascript
function initFeature() {
    const element = document.getElementById('myElement');
    
    if (!element) return;  // Exit early if element doesn't exist
    
    element.addEventListener('click', handleClick);
}
```

### Event Delegation

Instead of adding listeners to many elements, add one to a parent:

```javascript
// Instead of this (100 listeners):
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', handleClick);
});

// Do this (1 listener):
document.querySelector('.container').addEventListener('click', function(e) {
    if (e.target.classList.contains('item')) {
        handleClick(e);
    }
});
```

### Passive Event Listeners

For scroll/touch events that don't call preventDefault():

```javascript
// More performant
element.addEventListener('scroll', handleScroll, { passive: true });

// Needed if you call preventDefault()
element.addEventListener('touchmove', handleTouch, { passive: false });
```

---

## 🐛 Debugging Tips

### Console Methods

```javascript
console.log('Value:', variable);           // Basic logging
console.table(arrayOrObject);              // Display as table
console.group('Group Name');               // Group related logs
console.groupEnd();
console.time('Operation');                 // Time operations
console.timeEnd('Operation');
```

### Breakpoints

1. Add `debugger;` in code to pause execution
2. Use browser DevTools Sources panel
3. Add conditional breakpoints in DevTools

### Common Issues

1. **Element is null**: Check if DOM has loaded, verify selector
2. **Event fires multiple times**: Remove existing listener before adding new one
3. **Function not defined**: Check script load order and scope

---

## 📚 JavaScript Concepts Used

### ES6+ Features

```javascript
// Arrow functions
const add = (a, b) => a + b;

// Template literals
const message = `Hello, ${name}!`;

// Destructuring
const { title, description } = object;

// Spread operator
const newArray = [...oldArray, newItem];

// Default parameters
function greet(name = 'Guest') { }
```

### Array Methods

```javascript
// forEach - loop through array
items.forEach(item => console.log(item));

// map - transform array
const doubled = numbers.map(n => n * 2);

// filter - filter array
const evens = numbers.filter(n => n % 2 === 0);

// find - find single item
const found = items.find(item => item.id === 1);
```

### DOM Manipulation

```javascript
// Query elements
document.querySelector('.class');
document.querySelectorAll('.class');
document.getElementById('id');

// Create elements
const div = document.createElement('div');

// Modify elements
element.textContent = 'Text';
element.innerHTML = '<span>HTML</span>';
element.classList.add('class');
element.classList.remove('class');
element.classList.toggle('class');

// Attributes
element.setAttribute('data-id', '123');
element.getAttribute('data-id');
element.dataset.id;  // data-id attribute
```

---

## 🧪 Testing Your Code

### Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Type code and press Enter

### Test Functions

```javascript
// Add to your code for testing
function testGalleryFilter() {
    const filterBtn = document.querySelector('[data-filter="2025"]');
    filterBtn.click();
    
    const visibleItems = document.querySelectorAll('.gallery-item[style*="block"]');
    console.log(`Visible items: ${visibleItems.length}`);
}
```

---

*For the complete implementation, refer to [assets/js/modern-scripts.js](assets/js/modern-scripts.js)*
