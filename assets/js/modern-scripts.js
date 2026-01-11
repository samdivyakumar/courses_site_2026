/**
 * CMC Distance Education - Modern JavaScript
 * Main application scripts for enhanced user experience
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initBackToTop();
        initSmoothScroll();
        initNavbarCollapse();
        initMobileDropdowns();
        initSectionTitleAnimations();
        initGalleryFilter();
    });

    /**
     * Back to Top Button Functionality
     */
    function initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        
        if (!backToTop) return;

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
                behavior: 'smooth'
            });
        });
    }

    /**
     * Smooth Scroll for Anchor Links
     */
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
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Auto-close Mobile Navbar on Link Click
     */
    function initNavbarCollapse() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
        
        if (!navbarToggler || !navbarCollapse) return;

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // Only close navbar for non-dropdown links and dropdown items
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    // Don't close if it's a dropdown toggle
                    if (!this.classList.contains('dropdown-toggle')) {
                        navbarToggler.click();
                    }
                }
            });
        });
    }

    /**
     * Fix Mobile Dropdown Menu Behavior
     * Disables Bootstrap's dropdown on mobile and uses manual toggle
     */
    function initMobileDropdowns() {
        const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
        
        // Function to check if we're on mobile
        function isMobile() {
            return window.innerWidth < 992;
        }
        
        // Disable Bootstrap dropdown on mobile, enable on desktop
        function updateDropdownBehavior() {
            dropdownToggles.forEach(function(toggle) {
                if (isMobile()) {
                    // Remove Bootstrap's data attribute to disable its dropdown
                    toggle.removeAttribute('data-bs-toggle');
                } else {
                    // Re-enable Bootstrap dropdown on desktop
                    toggle.setAttribute('data-bs-toggle', 'dropdown');
                }
            });
        }
        
        // Initial setup
        updateDropdownBehavior();
        
        // Prevent scroll propagation on dropdown menus
        function preventScrollPropagation() {
            const dropdownMenus = document.querySelectorAll('.navbar .dropdown-menu');
            
            dropdownMenus.forEach(function(menu) {
                // Prevent touch move on the menu from scrolling the page
                menu.addEventListener('touchstart', function(e) {
                    if (isMobile() && menu.classList.contains('show')) {
                        e.stopPropagation();
                    }
                }, { passive: true });
                
                menu.addEventListener('touchmove', function(e) {
                    if (isMobile() && menu.classList.contains('show')) {
                        e.stopPropagation();
                        
                        // Allow scrolling within the dropdown
                        const scrollTop = menu.scrollTop;
                        const scrollHeight = menu.scrollHeight;
                        const height = menu.clientHeight;
                        const delta = e.touches[0].clientY - (menu.dataset.touchStartY || e.touches[0].clientY);
                        
                        // Prevent overscroll
                        if ((scrollTop <= 0 && delta > 0) || (scrollTop + height >= scrollHeight && delta < 0)) {
                            e.preventDefault();
                        }
                    }
                }, { passive: false });
                
                menu.addEventListener('touchend', function(e) {
                    delete menu.dataset.touchStartY;
                }, { passive: true });
                
                // Store initial touch position
                menu.addEventListener('touchstart', function(e) {
                    menu.dataset.touchStartY = e.touches[0].clientY;
                }, { passive: true });
                
                // Prevent wheel scroll propagation on desktop
                menu.addEventListener('wheel', function(e) {
                    e.stopPropagation();
                }, { passive: true });
            });
        }
        
        // Initialize scroll prevention
        preventScrollPropagation();
        
        // Handle click on dropdown toggles
        dropdownToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(e) {
                // Only handle manually on mobile
                if (isMobile()) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const parent = this.closest('.nav-item.dropdown');
                    const dropdownMenu = this.nextElementSibling;
                    
                    if (!parent || !dropdownMenu) return;
                    
                    const isOpen = dropdownMenu.classList.contains('show');
                    
                    // Close all other dropdowns first
                    document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function(menu) {
                        if (menu !== dropdownMenu) {
                            menu.classList.remove('show');
                            const parentItem = menu.closest('.nav-item.dropdown');
                            if (parentItem) {
                                parentItem.classList.remove('show');
                                const parentToggle = parentItem.querySelector('.dropdown-toggle');
                                if (parentToggle) {
                                    parentToggle.setAttribute('aria-expanded', 'false');
                                }
                            }
                        }
                    });
                    
                    // Toggle current dropdown
                    if (!isOpen) {
                        dropdownMenu.classList.add('show');
                        parent.classList.add('show');
                        this.setAttribute('aria-expanded', 'true');
                    } else {
                        dropdownMenu.classList.remove('show');
                        parent.classList.remove('show');
                        this.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
        
        // Close dropdown when clicking on dropdown items
        const dropdownItems = document.querySelectorAll('.navbar .dropdown-item');
        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
                if (isMobile()) {
                    // Close all dropdowns
                    document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function(menu) {
                        menu.classList.remove('show');
                        const parentItem = menu.closest('.nav-item.dropdown');
                        if (parentItem) {
                            parentItem.classList.remove('show');
                            const toggle = parentItem.querySelector('.dropdown-toggle');
                            if (toggle) {
                                toggle.setAttribute('aria-expanded', 'false');
                            }
                        }
                    });
                }
            });
        });
        
        // Close dropdowns when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (isMobile()) {
                const isDropdownToggle = e.target.closest('.dropdown-toggle');
                const isDropdownMenu = e.target.closest('.dropdown-menu');
                const isNavbarToggler = e.target.closest('.navbar-toggler');
                
                // Close all dropdowns when clicking outside
                if (!isDropdownToggle && !isDropdownMenu && !isNavbarToggler) {
                    document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function(menu) {
                        menu.classList.remove('show');
                        const parentItem = menu.closest('.nav-item.dropdown');
                        if (parentItem) {
                            parentItem.classList.remove('show');
                            const toggle = parentItem.querySelector('.dropdown-toggle');
                            if (toggle) {
                                toggle.setAttribute('aria-expanded', 'false');
                            }
                        }
                    });
                    
                    // Close the navbar collapse when clicking anywhere
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        if (navbarToggler) {
                            navbarToggler.click();
                        }
                    }
                }
            }
        });
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                updateDropdownBehavior();
                
                // Clean up show classes when switching to desktop
                if (!isMobile()) {
                    document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function(menu) {
                        menu.classList.remove('show');
                        const parentItem = menu.closest('.nav-item.dropdown');
                        if (parentItem) {
                            parentItem.classList.remove('show');
                        }
                    });
                }
            }, 100);
        });
    }

    /**
     * Add animation class to elements when they come into view
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if (!animatedElements.length) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    /**
     * Animate Section Titles on Scroll
     */
    function initSectionTitleAnimations() {
        const sectionTitles = document.querySelectorAll('.section-title');
        const sectionSubtitles = document.querySelectorAll('.section-subtitle');
        
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sectionTitles.forEach(function(title) {
            observer.observe(title);
        });
        
        sectionSubtitles.forEach(function(subtitle) {
            observer.observe(subtitle);
        });
    }

    /**
     * Initialize scroll animations if elements exist
     */
    if (document.querySelector('.animate-on-scroll')) {
        initScrollAnimations();
    }
    
    // Initialize section title animations
    initSectionTitleAnimations();

    /**
     * Gallery Filter Functionality
     */
    function initGalleryFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const filterSlider = document.getElementById('galleryFilterSlider');
        const arrowLeft = document.getElementById('filterArrowLeft');
        const arrowRight = document.getElementById('filterArrowRight');
        
        if (!filterButtons.length || !galleryItems.length) return;
        
        // Initialize all items as visible
        galleryItems.forEach(function(item) {
            item.classList.add('show');
        });
        
        // Update arrow visibility based on scroll position
        function updateArrows() {
            if (!filterSlider || !arrowLeft || !arrowRight) return;
            
            const scrollLeft = filterSlider.scrollLeft;
            const maxScroll = filterSlider.scrollWidth - filterSlider.clientWidth;
            
            // Hide left arrow if at start
            if (scrollLeft <= 5) {
                arrowLeft.classList.add('hidden');
            } else {
                arrowLeft.classList.remove('hidden');
            }
            
            // Hide right arrow if at end
            if (scrollLeft >= maxScroll - 5) {
                arrowRight.classList.add('hidden');
            } else {
                arrowRight.classList.remove('hidden');
            }
        }
        
        // Arrow click handlers
        if (arrowLeft) {
            arrowLeft.addEventListener('click', function() {
                filterSlider.scrollBy({ left: -150, behavior: 'smooth' });
            });
        }
        
        if (arrowRight) {
            arrowRight.addEventListener('click', function() {
                filterSlider.scrollBy({ left: 150, behavior: 'smooth' });
            });
        }
        
        // Listen for scroll events to update arrows
        if (filterSlider) {
            filterSlider.addEventListener('scroll', updateArrows);
            // Initial check
            updateArrows();
            // Check on window resize
            window.addEventListener('resize', updateArrows);
        }
        
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Scroll the active button into view (center it)
                if (filterSlider) {
                    const btnLeft = this.offsetLeft;
                    const btnWidth = this.offsetWidth;
                    const sliderWidth = filterSlider.offsetWidth;
                    const scrollPos = btnLeft - (sliderWidth / 2) + (btnWidth / 2);
                    filterSlider.scrollTo({ left: scrollPos, behavior: 'smooth' });
                }
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(function(item) {
                    const itemYear = item.getAttribute('data-year');
                    
                    if (filterValue === 'all' || itemYear === filterValue) {
                        item.classList.remove('hidden');
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hidden');
                    }
                });
            });
        });
        
        // Initialize lightbox
        initGalleryLightbox();
    }
    
    /**
     * Gallery Lightbox Functionality
     */
    function initGalleryLightbox() {
        const lightbox = document.getElementById('galleryLightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDesc = document.getElementById('lightboxDesc');
        const lightboxCounter = document.getElementById('lightboxCounter');
        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');
        const galleryCards = document.querySelectorAll('.gallery-card');
        
        if (!lightbox || !galleryCards.length) return;
        
        let currentIndex = 0;
        let visibleImages = [];
        
        // Get visible images based on current filter
        function getVisibleImages() {
            visibleImages = [];
            document.querySelectorAll('.gallery-item.show .gallery-card').forEach(function(card) {
                const img = card.querySelector('img');
                const info = card.querySelector('.gallery-info');
                if (img) {
                    visibleImages.push({
                        src: img.src,
                        alt: img.alt,
                        title: info ? info.querySelector('h5').textContent : '',
                        desc: info ? info.querySelector('p').textContent : ''
                    });
                }
            });
        }
        
        // Open lightbox
        function openLightbox(index) {
            getVisibleImages();
            if (visibleImages.length === 0) return;
            
            currentIndex = index;
            updateLightboxImage();
            lightbox.classList.add('active');
            document.body.classList.add('lightbox-open');
        }
        
        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.classList.remove('lightbox-open');
        }
        
        // Update lightbox image
        function updateLightboxImage() {
            if (visibleImages.length === 0) return;
            
            const image = visibleImages[currentIndex];
            
            // Add fade out effect
            lightboxImage.style.opacity = '0';
            lightboxImage.style.transform = 'scale(0.95)';
            
            setTimeout(function() {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightboxTitle.textContent = image.title;
                lightboxDesc.textContent = image.desc;
                lightboxCounter.textContent = (currentIndex + 1) + ' / ' + visibleImages.length;
                
                // Fade in
                lightboxImage.style.opacity = '1';
                lightboxImage.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Navigate to previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
            updateLightboxImage();
        }
        
        // Navigate to next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % visibleImages.length;
            updateLightboxImage();
        }
        
        // Click on gallery card to open lightbox
        galleryCards.forEach(function(card, index) {
            card.addEventListener('click', function() {
                // Find the index among visible items
                getVisibleImages();
                const img = card.querySelector('img');
                const imgSrc = img ? img.src : '';
                
                const visibleIndex = visibleImages.findIndex(function(item) {
                    return item.src === imgSrc;
                });
                
                if (visibleIndex !== -1) {
                    openLightbox(visibleIndex);
                }
            });
        });
        
        // Close button
        closeBtn.addEventListener('click', closeLightbox);
        
        // Navigation buttons
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            prevImage();
        });
        
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nextImage();
        });
        
        // Click outside to close
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        });
        
        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        lightbox.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        lightbox.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next image
                    nextImage();
                } else {
                    // Swipe right - previous image
                    prevImage();
                }
            }
        }
    }

/**
     * Testimonials Carousel Functionality
     * Enhanced with center zoom effect and smooth transitions
     */
function initTestimonialsCarousel() {
    var container = safeQuerySelector('.testimonials-carousel-container');
    var slider = safeQuerySelector('.testimonials-slider');
    var items = safeQuerySelectorAll('.testimonial-item');
    var prevBtn = safeQuerySelector('.testimonial-arrow-left');
    var nextBtn = safeQuerySelector('.testimonial-arrow-right');
    var pagination = safeQuerySelector('.testimonial-pagination');

    if (!slider || !items.length) return;

    var currentIndex = 0;
    var autoScrollInterval = null;
    var autoScrollDelay = prefersReducedMotion() ? 8000 : 5000; // Slower for reduced motion
    var totalSlides = items.length;
    var isAnimating = false;
    var animationDuration = prefersReducedMotion() ? 100 : 500;

    // Get number of visible slides based on screen width
    function getVisibleSlides() {
        if (window.innerWidth >= 992) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    // Create pagination dots
    function createPagination() {
        if (!pagination) return;
        pagination.innerHTML = '';

        for (var i = 0; i < totalSlides; i++) {
            (function(index) {
                var dot = document.createElement('button');
                dot.classList.add('testimonial-pagination-dot');
                dot.setAttribute('aria-label', 'Go to testimonial ' + (index + 1));
                dot.setAttribute('type', 'button');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', function() {
                    if (!isAnimating) {
                        goToSlide(index);
                        resetAutoScroll();
                    }
                });
                pagination.appendChild(dot);
            })(i);
        }
    }

    // Update slider position
    function updateSliderPosition() {
        if (!items[0]) return;
        var itemWidth = items[0].offsetWidth;
        var offset = currentIndex * itemWidth;
        slider.style.transform = 'translateX(-' + offset + 'px)';
    }

    // Update item states
    function updateItemStates() {
        var visibleSlides = getVisibleSlides();

        items.forEach(function(item, index) {
            item.classList.remove('center', 'adjacent', 'hidden');

            // Calculate center index based on visible slides
            var centerIdx = currentIndex;
            if (visibleSlides === 3) {
                centerIdx = currentIndex + 1;
            } else if (visibleSlides === 2) {
                centerIdx = currentIndex;
            }

            if (index === centerIdx || (visibleSlides === 1 && index === currentIndex)) {
                item.classList.add('center');
            } else if (Math.abs(index - centerIdx) === 1) {
                item.classList.add('adjacent');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Update pagination
    function updatePagination() {
        var dots = safeQuerySelectorAll('.testimonial-pagination-dot');
        var visibleSlides = getVisibleSlides();
        var activeIdx = currentIndex;
        if (visibleSlides === 3) activeIdx = currentIndex + 1;

        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === activeIdx);
            dot.setAttribute('aria-current', index === activeIdx ? 'true' : 'false');
        });
    }

    // Main update
    function updateSlider() {
        updateSliderPosition();
        updateItemStates();
        updatePagination();
    }

    // Go to slide
    function goToSlide(index) {
        if (isAnimating) return;
        isAnimating = true;

        var visibleSlides = getVisibleSlides();
        var maxIndex = Math.max(0, totalSlides - visibleSlides);

        // For 3 visible slides, clicking dot should center that card
        if (visibleSlides === 3) {
            currentIndex = Math.max(0, Math.min(index - 1, maxIndex));
        } else {
            currentIndex = Math.min(index, maxIndex);
        }

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        updateSlider();

        setTimeout(function() {
            isAnimating = false;
        }, animationDuration);
    }

    // Next/Prev
    function nextSlide() {
        var visibleSlides = getVisibleSlides();
        var maxIndex = Math.max(0, totalSlides - visibleSlides);
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        var visibleSlides = getVisibleSlides();
        var maxIndex = Math.max(0, totalSlides - visibleSlides);
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateSlider();
    }

    // Auto scroll - disabled if user prefers reduced motion
    function startAutoScroll() {
        if (prefersReducedMotion()) return; // Don't auto-scroll for reduced motion
        stopAutoScroll();
        autoScrollInterval = setInterval(function() {
            if (!isAnimating) nextSlide();
        }, autoScrollDelay);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    function resetAutoScroll() {
        stopAutoScroll();
        startAutoScroll();
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            resetAutoScroll();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            resetAutoScroll();
        });
    }

    // Hover pause
    if (container) {
        container.addEventListener('mouseenter', stopAutoScroll);
        container.addEventListener('mouseleave', startAutoScroll);
    }

    // Touch support
    var touchStartX = 0;

    slider.addEventListener('touchstart', function(e) {
        if (e.changedTouches && e.changedTouches[0]) {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoScroll();
        }
    }, { passive: true });

    slider.addEventListener('touchend', function(e) {
        if (e.changedTouches && e.changedTouches[0]) {
            var touchEndX = e.changedTouches[0].screenX;
            var diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) nextSlide();
                else prevSlide();
            }
            startAutoScroll();
        }
    }, { passive: true });

    // Debounced resize handler for performance
    var handleResize = debounce(updateSlider, 150);
    window.addEventListener('resize', handleResize);

    // Initialize
    createPagination();
    updateSlider();
    startAutoScroll();
}

// Initialize testimonials carousel
if (safeQuerySelector('.testimonials-slider')) {
    initTestimonialsCarousel();
}

})();
