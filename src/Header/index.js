import {html, render} from 'lit-html';

export default class Header extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'});
  }
  render(title) {
    const component = html`
      <header>${title}</header>
    `
    render(component, this.shadow)
  }
  
  connectedCallback() {
    this.render('test!')
  }
}