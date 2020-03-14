# Pure-Accordion
- **Light**: 1.92kb for accordion.js and 0.82kb for accordion.css
- **Simple**: No configuration is needed
- **Clean**: No extra wrapper or container is needed, make your HTML even more straightforward
- **Flexible**: Only minimum css is provided, you can custom your accordion by overriding existing css

# Getting Started

## 1. Installation
`$npm install pure-accordion`

## 2. Include files to your website from node_modules
```
<head>
    ...
    <link rel="stylesheet" href="path/to/accordion.css">
</head>
<body>
    ...
    <script src="path/to/accordion.js"></script>
</body>
```
## 3. Add HTML Layout
```
<h1 class="accordion">Your Title</h1>
<div class="accordion-content">
  <p>Your content</p>
</div>
```

## 4. Initialize Accordion
```
<body>
...
  <script>
    accordionsInit({
      toggle: true
    })
  </script>
</body>
```

# Examples
1. Simple Accordion
```
<h2 class="accordion">Your Title</h2>
<div class="accordion-content">
  <p>Your content</p>
</div>
```
2. Nested Accordion
```
<h2 class="accordion">Level1</h2>
<div class="accordion-content">
  <h2 class="accordion">Level2</h2>
  <div class="accordion-content">
    <p>Your content</p>
  </div>
</div>
```

# Optional Configurations
| Parameters   | Type      | Default | Description      |
|:------------ |:----------|:--------|:-----------------|
| toggle       | boolean   | false   | collapse manually|

# Remarks
- You cannot set **padding-top, padding-bottom and border** for **.accordion-content**
- Wrap your text content in .accordion-content by a reasonable tag and add padding-top, padding-bottom or border to the wrapper
