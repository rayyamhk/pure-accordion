# pure-accordion
Make your accordions simple and beautiful

# Installation
npm install pure-accordion
Include both accordion.css and accordion.js in your project from "/node_modules/pure-accordion"

# Example
1. Simple Accordion
```
<h2 class="accordion">Your Title</h2>
<div class="accordion-content">
  <p>Your content</p>
</div>

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

```
<script>
  accordionsInit({
    toggle: true
  })
</script>
```
