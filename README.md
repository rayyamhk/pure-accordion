# Pure-Accordion
- **Light**: 1.92kb for accordion.js and 0.82kb for accordion.css
- **Simple**: No configuration is needed
- **Clean**: No extra wrapper or container is needed, make your HTML even more straightforward
- **Flexible**: Only minimum css is provided, you can custom your accordion by overriding existing css

# Installation
npm install pure-accordion\
Include both accordion.css and accordion.js in your project from "/node_modules/pure-accordion"

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

# Configuration
| Parameters   | Type      | Default | Description      |
|:------------ |:----------|:--------|:-----------------|
| toggle       | boolean   | false   | collapse manually|

```
<script>
  accordionsInit({
    toggle: boolean
  })
</script>
```

# Remarks
- You cannot set **padding-top, padding-bottom and border** for **.accordion-content**
- Wrap your text content in .accordion-content by a reasonable tag and add padding-top, padding-bottom or border to the wrapper
