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
        initTestimonialsCarousel();
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
     * Scroll-based carousel with center zoom effect
     */
function initTestimonialsCarousel() {
    var slider = safeQuerySelector('.testimonials-slider');
    var items = safeQuerySelectorAll('.testimonial-item');
    var prevBtn = safeQuerySelector('.testimonial-arrow-left');
    var nextBtn = safeQuerySelector('.testimonial-arrow-right');
    var pagination = safeQuerySelector('.testimonial-pagination');

    if (!slider || !items.length) return;

    var totalSlides = items.length;
    var autoScrollInterval = null;
    var autoScrollDelay = prefersReducedMotion() ? 8000 : 4000;
    var isScrolling = false;
    var scrollTimeout = null;
    var isVisible = false;
    var container = safeQuerySelector('.testimonials-carousel-container');

    // Check if testimonials section is visible in viewport
    function checkVisibility() {
        if (!container) return false;
        var rect = container.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (rect.top < windowHeight && rect.bottom > 0);
    }

    // Intersection Observer for visibility detection
    function setupVisibilityObserver() {
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    isVisible = entry.isIntersecting;
                    if (isVisible) {
                        startAutoScroll();
                    } else {
                        stopAutoScroll();
                    }
                });
            }, { threshold: 0.2 });
            
            if (container) {
                observer.observe(container);
            }
        } else {
            // Fallback for older browsers
            isVisible = true;
            startAutoScroll();
        }
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
                    scrollToItem(index);
                    resetAutoScroll();
                });
                pagination.appendChild(dot);
            })(i);
        }
    }

    // Get the center item index based on scroll position
    function getCenterItemIndex() {
        var sliderRect = slider.getBoundingClientRect();
        var sliderCenter = sliderRect.left + sliderRect.width / 2;
        var closestIndex = 0;
        var closestDistance = Infinity;

        items.forEach(function(item, index) {
            var itemRect = item.getBoundingClientRect();
            var itemCenter = itemRect.left + itemRect.width / 2;
            var distance = Math.abs(sliderCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    }

    // Update item states based on scroll position
    function updateItemStates() {
        var sliderRect = slider.getBoundingClientRect();
        var sliderCenter = sliderRect.left + sliderRect.width / 2;

        items.forEach(function(item, index) {
            var itemRect = item.getBoundingClientRect();
            var itemCenter = itemRect.left + itemRect.width / 2;
            var distance = Math.abs(sliderCenter - itemCenter);
            var itemWidth = itemRect.width;

            // Remove all state classes
            item.classList.remove('center', 'adjacent', 'far');

            // Determine state based on distance from center
            if (distance < itemWidth * 0.4) {
                item.classList.add('center');
            } else if (distance < itemWidth * 1.2) {
                item.classList.add('adjacent');
            } else {
                item.classList.add('far');
            }
        });

        // Update pagination
        updatePagination();
    }

    // Update pagination dots
    function updatePagination() {
        var centerIndex = getCenterItemIndex();
        var dots = safeQuerySelectorAll('.testimonial-pagination-dot');

        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === centerIndex);
            dot.setAttribute('aria-current', index === centerIndex ? 'true' : 'false');
        });
    }

    // Scroll to specific item
    function scrollToItem(index) {
        if (!items[index]) return;
        
        var item = items[index];
        var itemRect = item.getBoundingClientRect();
        var sliderRect = slider.getBoundingClientRect();
        
        // Calculate the scroll position to center the item
        var itemCenter = item.offsetLeft + item.offsetWidth / 2;
        var sliderVisibleWidth = slider.clientWidth;
        var scrollPosition = itemCenter - sliderVisibleWidth / 2;
        
        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    // Next slide
    function nextSlide() {
        var currentIndex = getCenterItemIndex();
        var nextIndex = (currentIndex + 1) % totalSlides;
        scrollToItem(nextIndex);
    }

    // Previous slide
    function prevSlide() {
        var currentIndex = getCenterItemIndex();
        var prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        scrollToItem(prevIndex);
    }

    // Auto scroll
    function startAutoScroll() {
        if (prefersReducedMotion()) return;
        if (!isVisible) return;
        stopAutoScroll();
        autoScrollInterval = setInterval(function() {
            if (!isScrolling && isVisible) {
                nextSlide();
            }
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

    // Handle scroll event with debouncing
    function handleScroll() {
        isScrolling = true;
        
        // Update states during scroll
        updateItemStates();
        
        // Clear existing timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Set new timeout to detect scroll end
        scrollTimeout = setTimeout(function() {
            isScrolling = false;
            updateItemStates();
        }, 100);
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

    // Scroll event listener
    slider.addEventListener('scroll', handleScroll, { passive: true });

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);

    // Touch support - pause auto scroll while touching
    slider.addEventListener('touchstart', function() {
        stopAutoScroll();
    }, { passive: true });

    slider.addEventListener('touchend', function() {
        setTimeout(function() {
            startAutoScroll();
        }, 1000);
    }, { passive: true });

    // Handle resize
    var handleResize = debounce(function() {
        updateItemStates();
    }, 150);
    window.addEventListener('resize', handleResize);

    // Keyboard navigation
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
            resetAutoScroll();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
            resetAutoScroll();
        }
    });

    // Initialize
    createPagination();
    
    // Initial state update after a short delay to ensure layout is complete
    setTimeout(function() {
        updateItemStates();
        // Setup visibility observer for auto-scroll
        setupVisibilityObserver();
    }, 100);
}

})();
