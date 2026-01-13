/**
 * Responsive Test Suite for CMC Distance Education Website
 * 
 * Run these tests by opening the website in Chrome DevTools and pasting this script
 * in the Console, or by including this script in the page.
 * 
 * Usage: 
 * 1. Open index.html in browser
 * 2. Open DevTools (F12)
 * 3. Go to Console tab
 * 4. Paste this entire script and press Enter
 * 5. Call runResponsiveTests() to run all tests
 */

const ResponsiveTestSuite = {
    // Screen size presets
    screenSizes: [
        { name: 'iPhone SE', width: 320, height: 568, type: 'mobile' },
        { name: 'Galaxy Note II', width: 360, height: 640, type: 'mobile' },
        { name: 'iPhone 6/7/8', width: 375, height: 667, type: 'mobile' },
        { name: 'iPhone 12/13', width: 390, height: 844, type: 'mobile' },
        { name: 'iPhone XR/11', width: 414, height: 896, type: 'mobile' },
        { name: 'iPad Mini', width: 768, height: 1024, type: 'tablet' },
        { name: 'iPad Pro', width: 1024, height: 1366, type: 'tablet' },
        { name: 'Laptop', width: 1280, height: 800, type: 'laptop' },
        { name: 'Desktop', width: 1440, height: 900, type: 'desktop' },
        { name: 'Full HD', width: 1920, height: 1080, type: 'desktop' }
    ],

    // Test results storage
    results: [],

    // Utility functions
    utils: {
        getComputedStyle: (selector) => {
            const element = document.querySelector(selector);
            return element ? window.getComputedStyle(element) : null;
        },
        
        isVisible: (selector) => {
            const element = document.querySelector(selector);
            if (!element) return false;
            const style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        },
        
        getElementDimensions: (selector) => {
            const element = document.querySelector(selector);
            if (!element) return null;
            const rect = element.getBoundingClientRect();
            return { width: rect.width, height: rect.height, top: rect.top, left: rect.left };
        },
        
        hasHorizontalOverflow: () => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        },
        
        countElements: (selector) => {
            return document.querySelectorAll(selector).length;
        }
    },

    // Test definitions
    tests: {
        // Navbar Tests
        navbar: {
            hamburgerVisibleOnMobile: function() {
                const toggler = document.querySelector('.navbar-toggler');
                const style = window.getComputedStyle(toggler);
                const isVisible = style.display !== 'none';
                const isMobile = window.innerWidth <= 991;
                
                return {
                    name: 'Navbar: Hamburger visible on mobile',
                    pass: isMobile ? isVisible : !isVisible,
                    message: isMobile 
                        ? (isVisible ? 'Hamburger menu is visible on mobile' : 'Hamburger menu should be visible on mobile')
                        : (isVisible ? 'Hamburger should be hidden on desktop' : 'Hamburger is correctly hidden on desktop'),
                    screenWidth: window.innerWidth
                };
            },
            
            menuItemsInSingleLine: function() {
                if (window.innerWidth <= 991) {
                    return { name: 'Navbar: Menu items in single line', pass: true, message: 'Not applicable on mobile', screenWidth: window.innerWidth };
                }
                
                const navItems = document.querySelectorAll('.navbar-nav .nav-item');
                if (navItems.length === 0) {
                    return { name: 'Navbar: Menu items in single line', pass: false, message: 'No nav items found', screenWidth: window.innerWidth };
                }
                
                const firstItemTop = navItems[0].getBoundingClientRect().top;
                let allSameLine = true;
                
                navItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    if (Math.abs(itemTop - firstItemTop) > 5) {
                        allSameLine = false;
                    }
                });
                
                return {
                    name: 'Navbar: Menu items in single line',
                    pass: allSameLine,
                    message: allSameLine ? 'All menu items are on the same line' : 'Menu items are wrapping to multiple lines',
                    screenWidth: window.innerWidth
                };
            },
            
            navbarFixed: function() {
                const navbar = document.querySelector('.navbar');
                const style = window.getComputedStyle(navbar);
                const isFixed = style.position === 'fixed';
                
                return {
                    name: 'Navbar: Fixed positioning',
                    pass: isFixed,
                    message: isFixed ? 'Navbar is fixed at top' : 'Navbar is not fixed',
                    screenWidth: window.innerWidth
                };
            },
            
            logoVisible: function() {
                const logo = document.querySelector('.navbar-brand img');
                const isVisible = logo && logo.offsetWidth > 0;
                
                return {
                    name: 'Navbar: Logo visible',
                    pass: isVisible,
                    message: isVisible ? 'Logo is visible' : 'Logo is not visible or missing',
                    screenWidth: window.innerWidth
                };
            }
        },
        
        // Layout Tests
        layout: {
            noHorizontalScroll: function() {
                const hasOverflow = document.documentElement.scrollWidth > window.innerWidth;
                
                return {
                    name: 'Layout: No horizontal scroll',
                    pass: !hasOverflow,
                    message: hasOverflow 
                        ? `Horizontal overflow detected (${document.documentElement.scrollWidth}px > ${window.innerWidth}px)` 
                        : 'No horizontal overflow',
                    screenWidth: window.innerWidth
                };
            },
            
            containerWithinViewport: function() {
                const containers = document.querySelectorAll('.container, .container-fluid');
                let allWithin = true;
                let overflowElement = null;
                
                containers.forEach(container => {
                    const rect = container.getBoundingClientRect();
                    if (rect.width > window.innerWidth) {
                        allWithin = false;
                        overflowElement = container;
                    }
                });
                
                return {
                    name: 'Layout: Containers within viewport',
                    pass: allWithin,
                    message: allWithin ? 'All containers fit within viewport' : 'Some containers exceed viewport width',
                    screenWidth: window.innerWidth
                };
            }
        },
        
        // Section Tests
        sections: {
            heroSectionVisible: function() {
                const hero = document.querySelector('.hero-section');
                if (!hero) return { name: 'Sections: Hero visible', pass: false, message: 'Hero section not found', screenWidth: window.innerWidth };
                
                const rect = hero.getBoundingClientRect();
                const isVisible = rect.height > 0;
                
                return {
                    name: 'Sections: Hero visible',
                    pass: isVisible,
                    message: isVisible ? `Hero section visible (height: ${rect.height}px)` : 'Hero section has no height',
                    screenWidth: window.innerWidth
                };
            },
            
            courseCardsLayout: function() {
                const cards = document.querySelectorAll('.course-card');
                if (cards.length === 0) {
                    return { name: 'Sections: Course cards layout', pass: true, message: 'No course cards found', screenWidth: window.innerWidth };
                }
                
                const firstCard = cards[0];
                const cardWidth = firstCard.getBoundingClientRect().width;
                const viewportWidth = window.innerWidth;
                
                // Check if cards are appropriately sized
                const isMobile = viewportWidth <= 575;
                const isTablet = viewportWidth > 575 && viewportWidth <= 991;
                
                let expectedBehavior = '';
                let pass = true;
                
                if (isMobile) {
                    // Cards should be nearly full width on mobile
                    pass = cardWidth > viewportWidth * 0.8;
                    expectedBehavior = 'Cards should be full width on mobile';
                } else if (isTablet) {
                    // Cards should be around 50% width on tablet
                    pass = cardWidth < viewportWidth * 0.6;
                    expectedBehavior = 'Cards should be in 2 columns on tablet';
                } else {
                    // Cards should be around 50% or 33% on desktop
                    pass = cardWidth < viewportWidth * 0.5;
                    expectedBehavior = 'Cards should be in multiple columns on desktop';
                }
                
                return {
                    name: 'Sections: Course cards layout',
                    pass: pass,
                    message: `Card width: ${Math.round(cardWidth)}px. ${expectedBehavior}`,
                    screenWidth: window.innerWidth
                };
            },
            
            galleryGridLayout: function() {
                const galleryItems = document.querySelectorAll('.gallery-item:not([style*="display: none"])');
                if (galleryItems.length === 0) {
                    return { name: 'Sections: Gallery grid', pass: true, message: 'No visible gallery items', screenWidth: window.innerWidth };
                }
                
                return {
                    name: 'Sections: Gallery grid',
                    pass: galleryItems.length > 0,
                    message: `${galleryItems.length} gallery items visible`,
                    screenWidth: window.innerWidth
                };
            },
            
            testimonialsVisible: function() {
                const testimonials = document.querySelector('.testimonials-section');
                const cards = document.querySelectorAll('.testimonial-item');
                
                if (!testimonials) {
                    return { name: 'Sections: Testimonials', pass: false, message: 'Testimonials section not found', screenWidth: window.innerWidth };
                }
                
                return {
                    name: 'Sections: Testimonials',
                    pass: cards.length > 0,
                    message: `${cards.length} testimonial cards found`,
                    screenWidth: window.innerWidth
                };
            }
        },
        
        // Touch Target Tests
        accessibility: {
            buttonTouchTargets: function() {
                const buttons = document.querySelectorAll('button, .btn, a.nav-link');
                let smallTargets = [];
                const minSize = 44; // Recommended minimum touch target size
                
                buttons.forEach((btn, index) => {
                    const rect = btn.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        if (rect.width < minSize || rect.height < minSize) {
                            smallTargets.push({
                                element: btn.textContent.trim().substring(0, 20),
                                width: Math.round(rect.width),
                                height: Math.round(rect.height)
                            });
                        }
                    }
                });
                
                const isMobile = window.innerWidth <= 767;
                
                return {
                    name: 'Accessibility: Touch targets',
                    pass: !isMobile || smallTargets.length === 0,
                    message: smallTargets.length === 0 
                        ? 'All touch targets meet minimum size' 
                        : `${smallTargets.length} elements have small touch targets`,
                    details: smallTargets.slice(0, 5),
                    screenWidth: window.innerWidth
                };
            },
            
            textReadability: function() {
                const bodyStyle = window.getComputedStyle(document.body);
                const fontSize = parseFloat(bodyStyle.fontSize);
                const isMobile = window.innerWidth <= 480;
                const minFontSize = 14;
                
                return {
                    name: 'Accessibility: Text readability',
                    pass: fontSize >= minFontSize,
                    message: `Base font size: ${fontSize}px (minimum: ${minFontSize}px)`,
                    screenWidth: window.innerWidth
                };
            }
        },
        
        // Video Tests
        media: {
            videosResponsive: function() {
                const videos = document.querySelectorAll('.ratio, iframe[src*="vimeo"], iframe[src*="youtube"]');
                let allResponsive = true;
                
                videos.forEach(video => {
                    const rect = video.getBoundingClientRect();
                    if (rect.width > window.innerWidth) {
                        allResponsive = false;
                    }
                });
                
                return {
                    name: 'Media: Videos responsive',
                    pass: allResponsive,
                    message: allResponsive ? `${videos.length} videos are responsive` : 'Some videos exceed viewport width',
                    screenWidth: window.innerWidth
                };
            },
            
            imagesResponsive: function() {
                const images = document.querySelectorAll('img');
                let oversizedImages = [];
                
                images.forEach(img => {
                    if (img.naturalWidth > 0 && img.offsetWidth > window.innerWidth) {
                        oversizedImages.push(img.src.split('/').pop());
                    }
                });
                
                return {
                    name: 'Media: Images responsive',
                    pass: oversizedImages.length === 0,
                    message: oversizedImages.length === 0 
                        ? 'All images fit within viewport' 
                        : `${oversizedImages.length} images exceed viewport`,
                    screenWidth: window.innerWidth
                };
            }
        }
    },

    // Run all tests
    runAllTests: function() {
        this.results = [];
        console.log('%c=== Responsive Test Suite ===', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log(`Testing at viewport: ${window.innerWidth} × ${window.innerHeight}`);
        console.log('');
        
        // Run all test categories
        Object.keys(this.tests).forEach(category => {
            console.log(`%c${category.toUpperCase()}`, 'color: #764ba2; font-weight: bold;');
            
            Object.keys(this.tests[category]).forEach(testName => {
                const result = this.tests[category][testName]();
                this.results.push(result);
                
                const icon = result.pass ? '✅' : '❌';
                const color = result.pass ? 'color: #27ae60' : 'color: #e74c3c';
                console.log(`${icon} %c${result.name}`, color);
                console.log(`   ${result.message}`);
                if (result.details) {
                    console.log('   Details:', result.details);
                }
            });
            console.log('');
        });
        
        // Summary
        const passed = this.results.filter(r => r.pass).length;
        const failed = this.results.filter(r => !r.pass).length;
        
        console.log('%c=== SUMMARY ===', 'color: #667eea; font-size: 14px; font-weight: bold;');
        console.log(`%cPassed: ${passed}`, 'color: #27ae60; font-weight: bold;');
        console.log(`%cFailed: ${failed}`, 'color: #e74c3c; font-weight: bold;');
        console.log(`Total: ${this.results.length}`);
        
        return {
            passed,
            failed,
            total: this.results.length,
            results: this.results
        };
    },

    // Run tests at multiple viewport sizes (simulation)
    runTestsAtAllSizes: async function() {
        console.log('%c=== Running Tests at All Screen Sizes ===', 'color: #667eea; font-size: 18px; font-weight: bold;');
        console.log('Note: This simulates different viewports but actual rendering may vary.');
        console.log('For accurate testing, use Chrome DevTools Device Mode.');
        console.log('');
        
        const summaries = [];
        
        this.screenSizes.forEach(size => {
            console.log(`%c--- ${size.name} (${size.width}×${size.height}) ---`, 'color: #f39c12; font-weight: bold;');
            
            // Note: We can't actually resize the viewport programmatically
            // This is informational about what to test at each size
            console.log(`Device type: ${size.type}`);
            console.log(`Expected behaviors:`);
            
            if (size.width <= 480) {
                console.log('  - Single column layout');
                console.log('  - Hamburger menu visible');
                console.log('  - Reduced padding');
                console.log('  - Testimonials fit in viewport');
            } else if (size.width <= 767) {
                console.log('  - Mobile optimized layout');
                console.log('  - Hamburger menu visible');
                console.log('  - Touch-friendly buttons');
            } else if (size.width <= 991) {
                console.log('  - Tablet layout');
                console.log('  - Hamburger menu visible');
                console.log('  - 2-column card layout');
            } else {
                console.log('  - Full desktop layout');
                console.log('  - Expanded navbar menu');
                console.log('  - Multi-column layouts');
            }
            console.log('');
        });
        
        console.log('%cTo test at specific sizes:', 'color: #667eea; font-weight: bold;');
        console.log('1. Open Chrome DevTools (F12)');
        console.log('2. Click the "Toggle device toolbar" icon (Ctrl+Shift+M)');
        console.log('3. Select a device or enter custom dimensions');
        console.log('4. Run: ResponsiveTestSuite.runAllTests()');
    }
};

// Quick test function
function runResponsiveTests() {
    return ResponsiveTestSuite.runAllTests();
}

// Quick function to test at all sizes
function testAllSizes() {
    return ResponsiveTestSuite.runTestsAtAllSizes();
}

// Auto-run notification
console.log('%c📱 Responsive Test Suite Loaded!', 'color: #667eea; font-size: 14px; font-weight: bold;');
console.log('Run tests: runResponsiveTests()');
console.log('View all sizes: testAllSizes()');
console.log('Current viewport:', window.innerWidth, '×', window.innerHeight);
