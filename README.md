# CMC Vellore Distance Education Courses Website

## 📚 Project Overview

This is the official website for the **Distance Education Unit of Christian Medical College (CMC), Vellore, India**. The website serves as a comprehensive platform for showcasing and managing applications for various post-graduate distance education courses in the medical and healthcare field.

### 🎯 Purpose
- Display information about distance education courses
- Provide online application portals for various programs
- Showcase convocation galleries and student testimonials
- Serve as the primary point of contact for prospective students

---

## 🏗️ Project Structure

```
courses_110125_v1/
├── index.html                    # Main landing page with all course information
├── applications/                 # Application forms for different courses
│   ├── 2026PGDFMAppln.html       # PGDFM Application
│   ├── 2026PGDMHAppln.html       # PGDMH Application
│   ├── 2026PGDGAppln.html        # PGDG Application
│   ├── 2026IPGDFMAppln.html      # I-PGDFM Application
│   ├── 2026IPGDHCMAppln.html     # I-PGDHCM Application
│   ├── 2026CGDAppln.html         # CGD Application
│   ├── FIDAppln.html             # FID Application
│   ├── NotEligibleMessage.html   # Error page for ineligible applicants
│   └── Response*.html            # Form submission response pages
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css     # Bootstrap framework (local copy)
│   │   └── modern-style.css      # Custom styles (~2000 lines)
│   ├── js/
│   │   └── modern-scripts.js     # Custom JavaScript (~1100 lines)
│   └── img/
│       └── gallery/              # Convocation photos and testimonials
├── attachments/                  # PDF documents (prospectuses, brochures)
│   ├── AdmissionBulletinPGDFM2026.pdf
│   ├── AdmissionBulletinPGDMH2026.pdf
│   └── ...
└── tests/
    ├── responsive-tests.html     # Responsive testing interface
    └── responsive-test-suite.js  # Automated responsive tests
```

---

## 🛠️ Technologies Used

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **Bootstrap** | 5.3.2 | Responsive grid system and UI components |
| **Bootstrap Icons** | 1.11.2 | Icon library |
| **Google Fonts** | Inter | Typography |

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No framework dependencies

### External Services
- **Google Analytics 4** - Website analytics (ID: G-Y171TJ6FLH)
- **Cognito Forms** - Application form handling
- **Vimeo** - Video hosting for course introductions
- **AWS S3** - External file hosting for some resources

---

## 🎨 Styling Architecture

### CSS Variables (Custom Properties)
Located in [assets/css/modern-style.css](assets/css/modern-style.css):

```css
:root {
    --primary-color: #233e67;    /* Primary brand color (dark blue) */
    --secondary-color: #6c757d;  /* Secondary gray */
    --success-color: #198754;    /* Success green */
    --danger-color: #dc3545;     /* Danger red */
    --dark-color: #212529;       /* Text dark */
    --light-bg: #f8f9fa;         /* Light background */
}
```

### Key CSS Features

1. **Responsive Navigation**
   - Desktop: Full horizontal menu with dropdowns
   - Mobile: Hamburger menu with animated dropdown
   - Breakpoint: 992px (Bootstrap lg)

2. **Hero Section**
   - Animated gradient background
   - Floating particle effects using CSS pseudo-elements
   - Responsive announcement cards

3. **Course Cards**
   - Bootstrap card components with custom styling
   - Icon headers using Bootstrap Icons
   - List group items for structured content

4. **Gallery System**
   - Filter by year using JavaScript
   - Lightbox modal for image viewing
   - Hover overlay effects

5. **Testimonials Carousel**
   - Auto-scrolling carousel
   - Touch-enabled for mobile
   - Pagination dots

### Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 991px) { /* Mobile menu */ }
@media (min-width: 992px) and (max-width: 1300px) { /* Laptops */ }
@media (min-width: 992px) and (max-width: 1100px) { /* Smaller laptops */ }
```

---

## ⚡ JavaScript Features

### File: [assets/js/modern-scripts.js](assets/js/modern-scripts.js)

### Core Modules

#### 1. **Utility Functions**
```javascript
safeQuerySelector(selector)      // Safe DOM selection
safeQuerySelectorAll(selector)   // Safe multiple DOM selection
prefersReducedMotion()           // Accessibility check
debounce(func, wait)             // Rate limiting
```

#### 2. **Navigation System**
- `initBackToTop()` - Back to top button visibility
- `initSmoothScroll()` - Smooth scrolling for anchor links
- `initNavbarCollapse()` - Mobile menu toggle with body scroll lock
- `initMobileDropdowns()` - Touch-friendly dropdown menus

#### 3. **Gallery Features**
- `initGalleryFilter()` - Year-based filtering
- Lightbox modal with keyboard navigation
- Touch swipe support

#### 4. **Testimonials Carousel**
- `initTestimonialsCarousel()` - Auto-play carousel
- Pause on hover
- Touch swipe navigation

### Event Initialization
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

## 📋 Available Courses

| Course | Full Name | Duration | Target Audience |
|--------|-----------|----------|-----------------|
| **PGDFM** | Post Graduate Diploma in Family Medicine | 2 years | MBBS doctors |
| **I-PGDFM** | International PGDFM | 2 years | International doctors |
| **DFID** | Distance Fellowship in Diabetes | 1 year | MD/DNB holders |
| **PGDG** | PG Diploma in Geriatrics | 1 year | MBBS doctors |
| **PGDMH** | PG Diploma in Mental Health | 1 year | Doctor-graduate teams |
| **PGDRM** | PG Diploma in Rehabilitation Medicine | 1 year | Doctor-therapist teams |
| **PGDLM** | PG Diploma in Lifestyle Medicine | 1 year | Doctor-associate teams |
| **CGD** | Certificate in General Dentistry | 1 year | BDS holders |
| **FID** | Foundations in Dentistry | 3 months | BDS holders |
| **PGDCBE** | PG Diploma in Christian Bioethics | 2 years | Healthcare professionals |
| **I-PGDHCM** | International PG Diploma in Healthcare Management | 2 years | Healthcare managers |

---

## 📄 Page Sections (index.html)

### Section IDs for Navigation

| Section ID | Description |
|------------|-------------|
| `#pgdfm` | PGDFM Course Details |
| `#ipgdfm` | International PGDFM |
| `#dfid` | Diabetes Fellowship |
| `#pgdg` | Geriatrics Diploma |
| `#pgdmh` | Mental Health Diploma |
| `#pgdrm` | Rehabilitation Medicine |
| `#pgdlm` | Lifestyle Medicine |
| `#cgd` | General Dentistry Certificate |
| `#fid` | Foundations in Dentistry |
| `#pgdcbe` | Christian Bioethics |
| `#ipgdhcm` | Healthcare Management |
| `#gallery` | Convocation Gallery |
| `#testimonials` | Student Feedback |
| `#contact` | Contact Information |

---

## 🧪 Testing

### Responsive Test Suite
Located in `/tests/` directory:

```javascript
// Run tests in browser console
runResponsiveTests()
```

### Test Categories
1. **Navbar Tests**
   - Hamburger visibility on mobile
   - Menu items alignment
   - Fixed positioning
   - Logo visibility

2. **Layout Tests**
   - No horizontal scroll
   - Proper viewport width
   - Section padding

3. **Screen Sizes Tested**
   - iPhone SE (320px)
   - iPhone 6/7/8 (375px)
   - iPad Mini (768px)
   - Laptop (1280px)
   - Desktop (1440px)
   - Full HD (1920px)

---

## 🚀 Getting Started

### For Beginners

1. **Clone/Download the Project**
   ```bash
   git clone [repository-url]
   cd courses_110125_v1
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No build process required!

3. **Local Development Server** (Optional)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using VS Code
   # Install "Live Server" extension and click "Go Live"
   ```

### File Editing Guide

| To modify... | Edit this file |
|--------------|----------------|
| Course content | `index.html` (find section by ID) |
| Colors/Styles | `assets/css/modern-style.css` |
| Interactions | `assets/js/modern-scripts.js` |
| Application forms | `applications/*.html` |

---

## 📝 Common Tasks

### Adding a New Course Section

1. Add navigation link in the `<nav>` element:
```html
<li class="nav-item">
    <a class="nav-link" href="#newcourse">New Course</a>
</li>
```

2. Add the section in the body:
```html
<section id="newcourse">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
                <h2 class="section-title">New Course Title</h2>
                <p class="section-subtitle">Course description</p>
            </div>
        </div>
        <!-- Course cards here -->
    </div>
</section>
```

### Adding a Gallery Image

1. Place image in `assets/img/gallery/`
2. Add to gallery grid in `index.html`:
```html
<div class="col-lg-4 col-md-6 gallery-item" data-year="2025">
    <div class="gallery-card">
        <img src="assets/img/gallery/new-image.jpg" alt="Description" class="img-fluid">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h5>Event Title</h5>
                <p>Event Description</p>
            </div>
        </div>
    </div>
</div>
```

### Adding a Testimonial

Add to testimonials slider in `index.html`:
```html
<div class="testimonial-item">
    <div class="testimonial-card-inner">
        <div class="testimonial-top">
            <img src="assets/img/gallery/testimonial/photo.jpg" alt="Name" class="testimonial-img">
            <div class="testimonial-meta">
                <h4 class="testimonial-person">Person Name</h4>
                <p class="testimonial-position">Course Graduate</p>
            </div>
        </div>
        <h5 class="testimonial-heading">Quote Headline</h5>
        <p class="testimonial-description">Full testimonial text...</p>
    </div>
</div>
```

---

## 🔧 Customization Guide

### Changing Brand Colors

Edit CSS variables in `assets/css/modern-style.css`:
```css
:root {
    --primary-color: #YOUR_COLOR;
}
```

### Modifying Navigation Color

```css
.navbar {
    background: #YOUR_COLOR !important;
}
```

### Hero Section Background

```css
.hero-section {
    background: radial-gradient(circle at 3% 25%, #COLOR1 0%, #COLOR2 100%);
}
```

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 📞 Contact Information

**Distance Education Unit**  
Christian Medical College, Vellore  
Balanilayam, No.95, Sanjeevipuram  
Bagayam, Vellore – 632002  
Tamil Nadu, India

- **Email:** info@cmcdistedu.org
- **Website:** [www.cmcdistedu.org](http://www.cmcdistedu.org)
- **Facebook:** [CMC Distance Education](https://www.facebook.com/cmcdistedu/)

---

## 📜 License

Copyright © CMC Vellore Distance Education Dept 2026

---

## 🤝 Contributing

For any updates or modifications to the website:
1. Create a backup of the files you're modifying
2. Test changes across multiple devices and browsers
3. Run the responsive test suite before deployment
4. Ensure all links and forms are working correctly

---

*Last Updated: January 2026*
