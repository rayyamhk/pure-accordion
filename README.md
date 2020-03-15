# Pure-Accordion
- **Light**: 3.17kb for accordion.js and 0.73kb for accordion.css
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
<p class="accordion-content">
  Your content
</p>
```

## 4. Initialize Accordion
```
<body>
...
  <script>
    // Default setting
    accordionsInit()
    // Custom setting
    accordionsInit({
        toggle?: boolean,
        button?: boolean
    })
  </script>
</body>
```

# Examples
1. Simple Accordion
```
<h2 class="accordion">Your Title</h2>
<p class="accordion-content">
  Your content
</p>
<h2 class="accordion">Your Title</h2>
<ul class="accordion-content">
  <li>Your list</li>
  <li>Your list</li>
  <li>Your list</li>
</ul>
```
2. Nested Accordion
```
<h1 class="accordion">Level1</h1>
<div class="accordion-content">
  <h2 class="accordion">Level2</h2>
  <p class="accordion-content">
    Your content
  </p>
</div>
```

# Optional Configurations
| Parameters   | Type      | Default | Description      |
|:------------ |:----------|:--------|:-----------------|
| toggle       | boolean   | false   | collapse manually|
| button       | boolean   | true    | display button   |
