class Accordion {
  /**
   * Get elements that match query and initialize
   * 
   * Some options can be customized in the future like class name,
   * animation effect, active section by default, etc...
   */
  constructor() {
    this.className = 'Accordion-title'
    this.elements = document.getElementsByClassName(this.className)
    this.expanded = null

    this.init()
  }

  /**
   * Add events listeners to elements
   */
  init() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener('click', this.toggle.bind(this, this.elements[i]))
      this.elements[i].active = false
    }
  }

  /**
   * Toggle element content
   * @param {HTMLElement} element
   */
  toggle(element) {
    if (element.active) {
      this.collapse(element)
    } else {
      if (this.expanded && this.expanded !== element) {
        this.collapse(this.expanded)
      }

      this.expand(element)
    }
  }

  /**
   * Expand element content
   * @param {HTMLElement} element
   */
  expand(element) {
    const { nextElementSibling: content, dataset: { url } } = element

    if(url) {
      this.removeContent(content)
      
      this.addSpinner(content)

      //request goes pretty fast so let's put some delay
      setTimeout(() => {
        this.loadData(url, content)
      }, 1500)
    }

    element.classList.add('is-expanded')
    element.active = true

    this.setHeight(content)

    this.expanded = element
  }

  /**
   * Collapse element content
   * @param {HTMLElement} element
   */
  collapse(element) {
    const { nextElementSibling: content } = element

    element.classList.remove('is-expanded')
    content.style.height = null
    element.active = false

    this.expanded = null
  }

  /**
   * Add a spinner while data is loaded
   * @param {HTMLElement} element
   */
  addSpinner(element) {
    const spinner = document.createElement('div')

    spinner.classList.add('spinner')

    element.appendChild(spinner)
  }

  setHeight(element) {
    /**
     * firefox detect scrollHeight 0 when spinner is added,
     * maybe too fast? (debugging works)
     */
    let elementHeight = element.scrollHeight
    
    if(!elementHeight) {
      const elementStyle = getComputedStyle(element.firstElementChild)

      elementHeight = Number(elementStyle.height.replace('px', '')) + Number(elementStyle.marginTop.replace('px', '')) + Number(elementStyle.marginBottom.replace('px', ''))
    }

    element.style.height = elementHeight + 'px'
  }

  /**
   * Load data inside ajax element
   * @param {string} url 
   * @param {HTMLElement} element 
   */
  loadData(url, element) {
    this.requestJson(url)
      .then(data => {
        const container = document.createElement('div')
        
        for (let i = 0; i < data.length; i++) {
          const { title } = data[i]
          
          const paragraph = document.createElement('p')
          const text = document.createTextNode(title)

          paragraph.appendChild(text)
          container.appendChild(paragraph)
        }

        if(element.previousElementSibling.active) {
          this.removeContent(element)

          element.appendChild(container)
          
          this.setHeight(element)
        }
      })
  }

  /**
   * Remove element contents
   * @param {HTMLElement} element 
   */
  removeContent(element) {
    if (element.children.length) {
      for (let i = 0; i < element.children.length; i++) {
        element.removeChild(element.children[i])
      }
    }
  }

  /**
   * Request url data
   * @param {string} url
   * @returns {Array} (Depends on API)
   */
  requestJson(url) {
    return fetch(url).then(response => response.json())
  }
}

export default Accordion