# HTML Structure Guide

This document explains the HTML structure and semantic markup used in the CMC Distance Education website.

## 📋 Table of Contents

1. [Document Structure](#document-structure)
2. [Head Section](#head-section)
3. [Navigation](#navigation)
4. [Hero Section](#hero-section)
5. [Course Sections](#course-sections)
6. [Gallery Section](#gallery-section)
7. [Testimonials Section](#testimonials-section)
8. [Contact Section](#contact-section)
9. [Footer](#footer)

---

## 📄 Document Structure

### Basic HTML5 Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, styles, scripts -->
</head>
<body data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="70">
    <nav><!-- Navigation --></nav>
    
    <section id="hero"><!-- Hero --></section>
    <section id="pgdfm"><!-- Course 1 --></section>
    <section id="pgdmh"><!-- Course 2 --></section>
    <!-- More sections... -->
    
    <footer><!-- Footer --></footer>
    
    <!-- Scripts -->
</body>
</html>
```

### Body Attributes Explained

```html
<body 
    data-bs-spy="scroll"       <!-- Enable Bootstrap scroll spy -->
    data-bs-target="#mainNav"   <!-- Target navigation for highlighting -->
    data-bs-offset="70"         <!-- Offset for fixed navbar height -->
>
```

---

## 🔝 Head Section

### Complete Head Structure

```html
<head>
    <!-- Character Encoding -->
    <meta charset="utf-8">
    
    <!-- Viewport for Responsive Design -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Distance Education courses from Christian Medical College, Vellore">
    <meta name="author" content="Christian Medical College, Vellore">
    
    <!-- Page Title -->
    <title>Courses : Distance Education Unit :: Christian Medical College, Vellore</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <link rel="shortcut icon" href="assets/img/favicon.ico">
    
    <!-- External CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="assets/css/modern-style.css?v=20260120001" rel="stylesheet">
    
    <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y171TJ6FLH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y171TJ6FLH');
    </script>
</head>
```

### Version Query String

```html
<!-- Cache busting with version number -->
<link href="assets/css/modern-style.css?v=20260120001" rel="stylesheet">
```

Change the version number when you update the file to force browsers to download the new version.

---

## 🧭 Navigation

### Complete Navigation Structure

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
    <div class="container-fluid">
        <!-- Brand/Logo -->
        <a class="navbar-brand" href="#">
            <img src="assets/img/dedu_logo.png" alt="CMC Vellore Logo">
        </a>
        
        <!-- Mobile Toggle Button -->
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Collapsible Menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <!-- Simple Link -->
                <li class="nav-item">
                    <a class="nav-link" href="#dfid">Diabetes</a>
                </li>
                
                <!-- Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       role="button" 
                       data-bs-toggle="dropdown" 
                       aria-expanded="false">
                        Family Medicine
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#pgdfm">PGDFM</a></li>
                        <li><a class="dropdown-item" href="#ipgdfm">I-PGDFM</a></li>
                    </ul>
                </li>
                
                <!-- Dropdown with Sections -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       role="button" 
                       data-bs-toggle="dropdown">
                        Other Courses
                    </a>
                    <ul class="dropdown-menu">
                        <li><h6 class="dropdown-header">Community Health</h6></li>
                        <li><a class="dropdown-item" href="#">CLHTC</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><h6 class="dropdown-header">Lifestyle Medicine</h6></li>
                        <li><a class="dropdown-item" href="#pgdlm">PGDLM</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Bootstrap Classes Explained

| Class | Purpose |
|-------|---------|
| `navbar-expand-lg` | Expand menu on large screens (992px+) |
| `fixed-top` | Fix navigation to top of viewport |
| `navbar-toggler` | Hamburger menu button |
| `collapse navbar-collapse` | Collapsible content container |
| `ms-auto` | Push navigation to right (margin-start: auto) |
| `dropdown-toggle` | Indicates dropdown trigger |

### Accessibility Attributes

```html
<button aria-controls="navbarNav"    <!-- Links to controlled element -->
        aria-expanded="false"         <!-- Current state -->
        aria-label="Toggle navigation"> <!-- Screen reader label -->
```

---

## 🦸 Hero Section

### Hero Structure

```html
<section class="hero-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center hero-content">
                <h1 class="display-3 fw-bold mb-5 animate-fade-in">ANNOUNCEMENTS</h1>
                
                <!-- Announcement Card -->
                <div class="mb-4 animate-fade-in">
                    <h3 class="h4 mb-3">PGDFM 2026 application form is open!</h3>
                    <a href="#pgdfm" class="btn btn-light btn-lg btn-custom">
                        <i class="bi bi-arrow-right-circle me-2"></i>Click here to know more
                    </a>
                </div>
                
                <!-- More announcements... -->
            </div>
        </div>
    </div>
</section>
```

### Bootstrap Typography Classes

| Class | Purpose |
|-------|---------|
| `display-3` | Large display heading |
| `fw-bold` | Font weight bold |
| `h4` | Style like h4 without semantic h4 |
| `mb-3` | Margin bottom 3 (1rem) |

---

## 📚 Course Sections

### Standard Course Section Template

```html
<section id="pgdfm">
    <div class="container">
        <!-- Section Header -->
        <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
                <h2 class="section-title">Course Name (ACRONYM)</h2>
                <p class="section-subtitle">Brief course description</p>
            </div>
        </div>
        
        <!-- Alert Banner (if applications open) -->
        <div class="alert alert-primary mb-4" role="alert">
            <h4 class="alert-heading">
                <i class="bi bi-info-circle me-2"></i>Application Details
            </h4>
            <hr>
            <ul class="mb-0">
                <li><a href="prospectus.pdf" class="alert-link">Download prospectus</a></li>
                <li><a href="application.html" class="alert-link">Fill application form</a></li>
                <li class="text-danger"><strong>Last date: 20th March, 2026</strong></li>
            </ul>
        </div>
        
        <!-- Important Notice (optional) -->
        <div class="alert alert-warning mb-4" role="alert">
            <h5><i class="bi bi-exclamation-triangle me-2"></i>Important Information</h5>
            <p class="mb-0">Important notice text...</p>
        </div>
        
        <!-- Course Cards Grid -->
        <div class="row g-4">
            <!-- Eligibility Card -->
            <div class="col-lg-6">
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
            </div>
            
            <!-- Program Details Card -->
            <div class="col-lg-6">
                <div class="card course-card">
                    <div class="card-header">
                        <i class="bi bi-info-circle-fill me-2"></i>Program Details
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>Duration:</strong> 2 Years
                            </li>
                            <li class="list-group-item">
                                <strong>Course Fee:</strong>
                                <ul class="mt-2">
                                    <li>Indian citizens: ₹1,00,000</li>
                                    <li>NRI: US$2800</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Course Components Card -->
            <div class="col-lg-6">
                <div class="card course-card">
                    <div class="card-header">
                        <i class="bi bi-book-fill me-2"></i>Course Components
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Component 1</li>
                            <li class="list-group-item">Component 2</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Contact Centres Card -->
            <div class="col-lg-6">
                <div class="card course-card">
                    <div class="card-header">
                        <i class="bi bi-geo-alt-fill me-2"></i>Contact Centres
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Location 1</li>
                            <li class="list-group-item">Location 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="row mt-5">
            <div class="col-12 text-end">
                <a href="registration-form" class="btn btn-primary btn-custom me-2">
                    <i class="bi bi-link-45deg me-2"></i>Register here
                </a>
                <a href="#" class="btn btn-outline-primary btn-custom">
                    <i class="bi bi-house-fill me-2"></i>Back to Top
                </a>
            </div>
        </div>
    </div>
</section>
```

### Card Icons Reference

| Icon Class | Usage |
|------------|-------|
| `bi-check-circle-fill` | Eligibility criteria |
| `bi-info-circle-fill` | Program details |
| `bi-book-fill` | Course components |
| `bi-geo-alt-fill` | Contact centres |
| `bi-currency-dollar` | Fee details |
| `bi-gear-fill` | Course structure |
| `bi-star-fill` | Highlights |
| `bi-play-circle-fill` | Video sections |

---

## 🖼️ Gallery Section

### Gallery Structure

```html
<section id="gallery">
    <div class="container">
        <!-- Section Header -->
        <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
                <h2 class="section-title">Convocation Gallery</h2>
                <p class="section-subtitle">Celebrating our graduates</p>
            </div>
        </div>
        
        <!-- Year Filter -->
        <div class="row mb-4">
            <div class="col-12">
                <div class="gallery-filter-wrapper">
                    <button class="filter-arrow filter-arrow-left" id="filterArrowLeft">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <div class="gallery-filter-slider" id="galleryFilterSlider">
                        <button type="button" class="filter-btn active" data-filter="all">
                            All Years
                        </button>
                        <button type="button" class="filter-btn" data-filter="2025">
                            2025
                        </button>
                        <button type="button" class="filter-btn" data-filter="2024">
                            2024
                        </button>
                    </div>
                    <button class="filter-arrow filter-arrow-right" id="filterArrowRight">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Gallery Grid -->
        <div class="row g-4" id="galleryGrid">
            <div class="col-lg-4 col-md-6 gallery-item" data-year="2025">
                <div class="gallery-card">
                    <img src="assets/img/gallery/convocation-2025-1.jpg" 
                         alt="Convocation 2025" 
                         class="img-fluid">
                    <div class="gallery-overlay">
                        <div class="gallery-info">
                            <h5>Convocation 2025</h5>
                            <p>Group Photo</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- More gallery items... -->
        </div>
    </div>
</section>

<!-- Lightbox Modal -->
<div class="gallery-lightbox" id="galleryLightbox">
    <button class="lightbox-close" id="lightboxClose">
        <i class="bi bi-x-lg"></i>
    </button>
    <button class="lightbox-nav lightbox-prev" id="lightboxPrev">
        <i class="bi bi-chevron-left"></i>
    </button>
    <button class="lightbox-nav lightbox-next" id="lightboxNext">
        <i class="bi bi-chevron-right"></i>
    </button>
    <div class="lightbox-content">
        <img src="" alt="" id="lightboxImage">
        <div class="lightbox-caption" id="lightboxCaption">
            <h5 id="lightboxTitle"></h5>
            <p id="lightboxDesc"></p>
        </div>
    </div>
    <div class="lightbox-counter" id="lightboxCounter"></div>
</div>
```

### Data Attributes

```html
<!-- data-filter for filter buttons -->
<button data-filter="2025">2025</button>

<!-- data-year for gallery items -->
<div class="gallery-item" data-year="2025">
```

---

## 💬 Testimonials Section

### Testimonials Structure

```html
<section id="testimonials" class="testimonials-section">
    <div class="container-fluid">
        <!-- Section Header -->
        <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
                <h2 class="section-title">Feedback</h2>
                <p class="section-subtitle">What Our Students Say</p>
            </div>
        </div>
        
        <div class="testimonials-carousel-container">
            <!-- Navigation Arrows -->
            <div class="testimonial-nav-wrapper">
                <button class="testimonial-arrow testimonial-arrow-left">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <button class="testimonial-arrow testimonial-arrow-right">
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
            
            <!-- Testimonials Slider -->
            <div class="testimonials-slider">
                <!-- Testimonial Item -->
                <div class="testimonial-item">
                    <div class="testimonial-card-inner">
                        <div class="testimonial-top">
                            <img src="assets/img/gallery/testimonial/photo.jpg"
                                 alt="Person Name"
                                 class="testimonial-img">
                            <div class="testimonial-meta">
                                <h4 class="testimonial-person">Dr. Name</h4>
                                <p class="testimonial-position">PGDFM Graduate</p>
                            </div>
                        </div>
                        <h5 class="testimonial-heading">Testimonial headline</h5>
                        <p class="testimonial-description">Full testimonial text...</p>
                    </div>
                </div>
                <!-- More testimonials... -->
            </div>
            
            <!-- Pagination Dots -->
            <div class="testimonial-pagination"></div>
        </div>
    </div>
</section>
```

---

## 📞 Contact Section

### Contact Structure

```html
<section id="contact" class="bg-dark text-white">
    <div class="container">
        <!-- Call to Action -->
        <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
                <h2 class="section-title text-white">REGISTER HERE</h2>
                <p class="section-subtitle text-white-50">
                    Interested? Register to get course details!
                </p>
                <a href="https://forms.gle/xxx" class="btn btn-primary btn-lg btn-custom">
                    <i class="bi bi-clipboard-check me-2"></i>CLICK HERE TO REGISTER
                </a>
            </div>
        </div>
        
        <!-- Contact Information -->
        <div class="row text-center">
            <div class="col-lg-8 mx-auto">
                <h3 class="h4 mb-4">Address</h3>
                <h5>Distance Education Unit,<br>
                Christian Medical College,</h5>
                <p>Balanilayam, No.95, Sanjeevipuram,<br>
                Bagayam,<br>
                Vellore – 632002, Tamil Nadu, India.</p>
                
                <p><strong>Email:</strong> 
                    <a href="mailto:info@cmcdistedu.org" class="text-primary">
                        info@cmcdistedu.org
                    </a>
                </p>
                
                <p><i class="bi bi-phone me-2"></i>
                    <strong>PGDFM & PGDMH:</strong> +91 9385285893
                </p>
                
                <!-- Social Links -->
                <div class="mt-4">
                    <a href="https://www.facebook.com/cmcdistedu/" class="text-white me-3">
                        <i class="bi bi-facebook" style="font-size: 2rem;"></i>
                    </a>
                    <a href="http://www.cmcdistedu.org" class="text-white">
                        <i class="bi bi-globe" style="font-size: 2rem;"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🦶 Footer

### Footer Structure

```html
<footer>
    <div class="container">
        <p class="mb-0">
            Copyright &copy; CMC Vellore Distance Education Dept 2026 | 
            <a href="http://www.cmcdistedu.org" target="_blank">www.cmcdistedu.org</a>
        </p>
    </div>
</footer>

<!-- Back to Top Button -->
<div class="back-to-top" id="backToTop">
    <i class="bi bi-arrow-up"></i>
</div>

<!-- Scripts at End of Body -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/modern-scripts.js?v=20260113001"></script>
```

---

## ✅ HTML Best Practices

### Semantic HTML

```html
<!-- Use semantic elements -->
<nav>   <!-- Navigation -->
<main>  <!-- Main content -->
<section> <!-- Thematic grouping -->
<article> <!-- Self-contained content -->
<aside>   <!-- Sidebar content -->
<footer>  <!-- Footer content -->

<!-- Use appropriate heading levels -->
<h1>Main Title</h1>         <!-- One per page -->
<h2>Section Title</h2>       <!-- Main sections -->
<h3>Subsection Title</h3>    <!-- Within sections -->
```

### Accessibility

```html
<!-- Alt text for images -->
<img src="photo.jpg" alt="Description of image">

<!-- ARIA labels for interactive elements -->
<button aria-label="Close menu">×</button>

<!-- Form labels -->
<label for="email">Email:</label>
<input type="email" id="email">

<!-- Skip links (add at top of body) -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Performance

```html
<!-- Lazy loading for images -->
<img src="photo.jpg" loading="lazy" alt="...">

<!-- Preload critical resources -->
<link rel="preload" href="critical.css" as="style">

<!-- Async/defer for scripts -->
<script async src="analytics.js"></script>  <!-- Non-blocking, runs when ready -->
<script defer src="app.js"></script>        <!-- Runs after DOM parsed -->
```

---

## 🔗 External Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML Validator](https://validator.w3.org/)

---

*This guide covers the main HTML patterns used in the project. For the complete implementation, refer to [index.html](index.html)*
