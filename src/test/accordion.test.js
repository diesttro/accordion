import Accordion from './accordion'

describe('accordion', () => {
  let accordion

  beforeAll(() => {
    document.body.innerHTML = `
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
      </dl>`

      accordion = new Accordion()
  })

  test('should be instance of Accordion', () => {
    expect(accordion).toBeInstanceOf(Accordion)
  })

  test('should have the expected elements', () => {
    expect(accordion.elements.length).toBe(4)
  })

  test('should have the expected class all elements', () => {
    [...accordion.elements].forEach(element => {
      expect(element.classList.contains('Accordion-title')).toBeTruthy()
    })
  })

  test('should have been expanded the element when clicked', () => {
    accordion.elements[0].click()

    expect(accordion.elements[0].active).toBeTruthy()
  })

  test('should have been collapsed latest expanded element when new element was clicked', () => {
    accordion.elements[1].click()

    expect(accordion.elements[0].active).toBeFalsy()
  })

  test('should have been expanded last element clicked', () => {
    expect(accordion.elements[1].active).toBeTruthy()
  })

  test('should have been collapsed when expanded element was clicked', () => {
    accordion.elements[1].click()

    expect(accordion.elements[1].active).toBeFalsy()
  })

  test('should have been added new element inside ajax element when clicked', () => {
    accordion.elements[3].click()

    expect(accordion.elements[3].nextElementSibling.children.length).toBe(1)
  })
})