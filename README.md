## Description

Accordion in plain JavaScript.

## Usage

The accordion must have the following structure.

```html
<dl class="Accordion">
  <dt class="Accordion-title">Section 1</dt>
  <dd class="Accordion-content">
    <p>Section 1 Content...</p>
  </dd>
  <dt class="Accordion-title">Section 2</dt>
  <dd class="Accordion-content">
    <p>Section 2 Content...</p>
  </dd>
  <dt class="Accordion-title">Section 3</dt>
  <dd class="Accordion-content">
    <p>Section 3 Content...</p>
  </dd>
  <dt class="Accordion-title" data-url="https://jsonplaceholder.typicode.com/posts?userId=3">Section 4 (AJAX)</dt>
  <dd class="Accordion-content"></dd>
</dl>
```

The most important part is the Accordion-title and Accordion-content class, accordion works over them. If you want to load data from external source you need to add data-url attribute and modify loadData method in accordion.js file.

To see the accordion in action simply open the index.html file.

## Test

Before start make sure you have installed all dependencies.

To run the tests.

```bash
npm run test
```