## Accordion

Expand and collapse accordion by clicking over it.

You can see a demo [here](https://diesttro.github.io/accordion/).

_Please note that this is a technical test and the code is intended to meet those requirements._

## Usage

The accordion must have the following markup structure.

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

The most important part are the **Accordion-title** and **Accordion-content** class, accordion works over them. If you want to load data from external source you need to add data-url attribute and modify loadData method in accordion.js file.

## Test

Before start make sure you have installed all the dependencies.

```bash
npm install
```

Then you can run the tests.

```bash
npm run test
```
