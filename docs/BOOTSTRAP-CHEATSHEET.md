# Bootstrap 5 Cheat Sheet

A quick reference guide for Bootstrap classes used in this project.

---

## 📐 Grid System

### Container

```html
<div class="container">      <!-- Max-width container with responsive breakpoints -->
<div class="container-fluid"> <!-- Full width container -->
```

### Row & Columns

```html
<div class="row">
    <div class="col">           <!-- Equal width columns -->
    <div class="col-6">         <!-- 6 columns (50%) -->
    <div class="col-lg-4">      <!-- 4 columns on large screens -->
    <div class="col-md-6 col-lg-4">  <!-- 6 on medium, 4 on large -->
</div>
```

### Column Sizes

| Class | Width |
|-------|-------|
| `col-1` | 8.33% |
| `col-2` | 16.67% |
| `col-3` | 25% |
| `col-4` | 33.33% |
| `col-6` | 50% |
| `col-8` | 66.67% |
| `col-12` | 100% |

### Breakpoints

| Breakpoint | Class Infix | Dimensions |
|------------|-------------|------------|
| X-Small | (none) | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| X-Large | `xl` | ≥1200px |
| XX-Large | `xxl` | ≥1400px |

### Row Utilities

```html
<div class="row g-0">      <!-- No gutter (spacing between columns) -->
<div class="row g-4">      <!-- Gap level 4 -->
<div class="row gx-3">     <!-- Horizontal gap -->
<div class="row gy-2">     <!-- Vertical gap -->
```

---

## 📏 Spacing

### Format
`{property}{sides}-{size}`

### Properties
- `m` = margin
- `p` = padding

### Sides
- `t` = top
- `b` = bottom
- `s` = start (left in LTR)
- `e` = end (right in LTR)
- `x` = horizontal (left and right)
- `y` = vertical (top and bottom)
- blank = all sides

### Sizes
| Size | Value |
|------|-------|
| `0` | 0 |
| `1` | 0.25rem |
| `2` | 0.5rem |
| `3` | 1rem |
| `4` | 1.5rem |
| `5` | 3rem |
| `auto` | auto |

### Examples

```html
<div class="mt-3">     <!-- margin-top: 1rem -->
<div class="mb-5">     <!-- margin-bottom: 3rem -->
<div class="mx-auto">  <!-- margin: 0 auto (center) -->
<div class="p-4">      <!-- padding: 1.5rem -->
<div class="px-2">     <!-- padding-left & right: 0.5rem -->
<div class="py-3">     <!-- padding-top & bottom: 1rem -->
```

---

## 🎨 Colors

### Text Colors

```html
<p class="text-primary">Primary blue</p>
<p class="text-secondary">Secondary gray</p>
<p class="text-success">Success green</p>
<p class="text-danger">Danger red</p>
<p class="text-warning">Warning yellow</p>
<p class="text-info">Info cyan</p>
<p class="text-light">Light</p>
<p class="text-dark">Dark</p>
<p class="text-white">White</p>
<p class="text-muted">Muted gray</p>
```

### Background Colors

```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-success">Success background</div>
<div class="bg-danger">Danger background</div>
<div class="bg-warning">Warning background</div>
<div class="bg-info">Info background</div>
<div class="bg-light">Light background</div>
<div class="bg-dark">Dark background</div>
<div class="bg-white">White background</div>
```

---

## 📝 Typography

### Headings

```html
<h1 class="h1">Heading 1</h1>
<p class="h2">Styled as Heading 2</p>
<h1 class="display-1">Display 1</h1>  <!-- Larger, lighter -->
<h1 class="display-4">Display 4</h1>
```

### Font Size

```html
<p class="fs-1">Font size 1 (largest)</p>
<p class="fs-2">Font size 2</p>
<p class="fs-3">Font size 3</p>
<p class="fs-4">Font size 4</p>
<p class="fs-5">Font size 5</p>
<p class="fs-6">Font size 6 (smallest)</p>
```

### Font Weight & Style

```html
<p class="fw-bold">Bold text</p>
<p class="fw-bolder">Bolder text</p>
<p class="fw-semibold">Semibold text</p>
<p class="fw-normal">Normal weight</p>
<p class="fw-light">Light weight</p>
<p class="fst-italic">Italic text</p>
```

### Text Alignment

```html
<p class="text-start">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned</p>
<p class="text-md-center">Center on medium+</p>
```

### Text Transform

```html
<p class="text-lowercase">LOWERCASE</p>
<p class="text-uppercase">uppercase</p>
<p class="text-capitalize">capitalize each Word</p>
```

---

## 🔘 Buttons

### Button Styles

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>
```

### Outline Buttons

```html
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-secondary">Outline Secondary</button>
```

### Button Sizes

```html
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-sm">Small</button>
```

### Button States

```html
<button class="btn btn-primary disabled">Disabled</button>
<button class="btn btn-primary active">Active</button>
```

---

## 🃏 Cards

### Basic Card

```html
<div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Text content</p>
    </div>
    <div class="card-footer">Footer</div>
</div>
```

### Card with Image

```html
<div class="card">
    <img src="image.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Card text</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
</div>
```

---

## ⚠️ Alerts

```html
<div class="alert alert-primary" role="alert">Primary alert</div>
<div class="alert alert-secondary" role="alert">Secondary alert</div>
<div class="alert alert-success" role="alert">Success alert</div>
<div class="alert alert-danger" role="alert">Danger alert</div>
<div class="alert alert-warning" role="alert">Warning alert</div>
<div class="alert alert-info" role="alert">Info alert</div>

<!-- With heading -->
<div class="alert alert-primary" role="alert">
    <h4 class="alert-heading">Alert Heading</h4>
    <p>Alert message...</p>
    <hr>
    <p class="mb-0">Additional info</p>
</div>
```

---

## 📋 Lists

### List Group

```html
<ul class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item active">Active item</li>
    <li class="list-group-item disabled">Disabled item</li>
</ul>
```

### Flush List (No Borders)

```html
<ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
</ul>
```

---

## 🧭 Navigation

### Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Navbar Variants

```html
<nav class="navbar navbar-dark bg-dark">    <!-- Dark navbar -->
<nav class="navbar navbar-light bg-light">  <!-- Light navbar -->
<nav class="navbar fixed-top">              <!-- Fixed at top -->
<nav class="navbar sticky-top">             <!-- Sticky at top -->
```

---

## 📐 Flexbox Utilities

### Display

```html
<div class="d-flex">           <!-- Display flex -->
<div class="d-inline-flex">    <!-- Inline flex -->
<div class="d-none">           <!-- Hidden -->
<div class="d-block">          <!-- Display block -->
<div class="d-md-flex">        <!-- Flex on medium+ -->
<div class="d-none d-lg-block"> <!-- Hidden, shown on large+ -->
```

### Flex Direction

```html
<div class="d-flex flex-row">          <!-- Horizontal (default) -->
<div class="d-flex flex-column">       <!-- Vertical -->
<div class="d-flex flex-row-reverse">  <!-- Reverse horizontal -->
```

### Justify Content

```html
<div class="d-flex justify-content-start">   <!-- Left -->
<div class="d-flex justify-content-center">  <!-- Center -->
<div class="d-flex justify-content-end">     <!-- Right -->
<div class="d-flex justify-content-between"> <!-- Space between -->
<div class="d-flex justify-content-around">  <!-- Space around -->
```

### Align Items

```html
<div class="d-flex align-items-start">   <!-- Top -->
<div class="d-flex align-items-center">  <!-- Center -->
<div class="d-flex align-items-end">     <!-- Bottom -->
<div class="d-flex align-items-stretch"> <!-- Stretch (default) -->
```

### Flex Wrap

```html
<div class="d-flex flex-wrap">     <!-- Allow wrapping -->
<div class="d-flex flex-nowrap">   <!-- Prevent wrapping -->
```

### Gap

```html
<div class="d-flex gap-3">   <!-- Gap between items -->
```

---

## 🖼️ Images

```html
<img src="..." class="img-fluid" alt="...">    <!-- Responsive -->
<img src="..." class="rounded" alt="...">       <!-- Rounded corners -->
<img src="..." class="rounded-circle" alt="..."> <!-- Circle -->
<img src="..." class="img-thumbnail" alt="...">  <!-- Bordered -->
```

---

## 👁️ Visibility

```html
<div class="visible">    <!-- Visible -->
<div class="invisible">  <!-- Hidden but takes space -->
<div class="d-none">     <!-- Hidden completely -->
<div class="d-none d-md-block">  <!-- Hidden on small, visible on medium+ -->
```

---

## 🔲 Borders

```html
<div class="border">           <!-- All borders -->
<div class="border-top">       <!-- Top border only -->
<div class="border-end">       <!-- Right border only -->
<div class="border-0">         <!-- No border -->

<div class="border-primary">   <!-- Primary color border -->
<div class="border-danger">    <!-- Danger color border -->

<div class="rounded">          <!-- Rounded corners -->
<div class="rounded-0">        <!-- No rounding -->
<div class="rounded-circle">   <!-- Circle -->
<div class="rounded-pill">     <!-- Pill shape -->
```

---

## 📦 Sizing

```html
<div class="w-25">   <!-- Width 25% -->
<div class="w-50">   <!-- Width 50% -->
<div class="w-75">   <!-- Width 75% -->
<div class="w-100">  <!-- Width 100% -->
<div class="w-auto"> <!-- Width auto -->

<div class="h-25">   <!-- Height 25% -->
<div class="h-50">   <!-- Height 50% -->
<div class="h-100">  <!-- Height 100% -->

<div class="mw-100"> <!-- Max-width 100% -->
<div class="mh-100"> <!-- Max-height 100% -->

<div class="vw-100"> <!-- 100% viewport width -->
<div class="vh-100"> <!-- 100% viewport height -->
```

---

## 🎯 Position

```html
<div class="position-static">    <!-- Default -->
<div class="position-relative">  <!-- Relative -->
<div class="position-absolute">  <!-- Absolute -->
<div class="position-fixed">     <!-- Fixed -->
<div class="position-sticky">    <!-- Sticky -->

<div class="top-0">    <!-- Top: 0 -->
<div class="top-50">   <!-- Top: 50% -->
<div class="top-100">  <!-- Top: 100% -->
<div class="start-0">  <!-- Left: 0 -->
<div class="end-0">    <!-- Right: 0 -->
<div class="bottom-0"> <!-- Bottom: 0 -->

<!-- Center absolute element -->
<div class="position-absolute top-50 start-50 translate-middle">
```

---

## 📱 Responsive Utilities

All utilities can be responsive using breakpoint infixes:

```html
<!-- Display -->
<div class="d-none d-md-block">   <!-- Hidden on mobile, shown on md+ -->
<div class="d-lg-none">           <!-- Hidden on lg+ -->

<!-- Text alignment -->
<p class="text-center text-md-start">  <!-- Center, then left on md+ -->

<!-- Flex -->
<div class="d-flex flex-column flex-lg-row">  <!-- Column, then row on lg+ -->

<!-- Spacing -->
<div class="mt-3 mt-lg-5">  <!-- Margin varies by screen size -->
```

---

## 🔗 Quick Reference

### Most Used Classes in This Project

```html
<!-- Layout -->
container, row, col-lg-6, col-md-6

<!-- Spacing -->
mb-4, mb-5, mt-3, p-4, me-2

<!-- Text -->
text-center, text-white, fw-bold

<!-- Buttons -->
btn, btn-primary, btn-outline-primary, btn-lg, btn-custom

<!-- Cards -->
card, card-header, card-body, course-card

<!-- Lists -->
list-group, list-group-item, list-group-flush

<!-- Alerts -->
alert, alert-primary, alert-warning

<!-- Responsive -->
d-none, d-lg-block, col-lg-8 mx-auto
```

---

*For complete Bootstrap 5 documentation, visit [getbootstrap.com/docs/5.3](https://getbootstrap.com/docs/5.3)*
