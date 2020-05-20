(() => {
  const Mustache = /\{\{(.*?)\}\}/g
  const tpls = document.querySelectorAll('template')
  tpls.forEach(tpl => customElements.define(tpl.id, class extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })
      const sourceCode = tpl.innerHTML
      const mapPropToAttr = (_, prop) => {
        const key = prop.trim()
        const attr = this.getAttribute(key)
        this.removeAttribute(key)
        return attr
      }
      shadow.innerHTML = sourceCode.replace(Mustache, mapPropToAttr)
    }
  }))
})()
