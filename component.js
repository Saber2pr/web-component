(() => {
  document
    .querySelectorAll('template')
    .forEach(tpl => customElements.define(tpl.id, class extends HTMLElement {
      constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = tpl.innerHTML
      }
    }))
})()
