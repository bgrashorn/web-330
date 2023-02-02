/**
 =========================================================
 ; Title: cart-component.js
 ; Author: Brett Grashorn
 ; Date: 31 January 2023
 ; Description: JavaScript code for Assignment .
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_5 document
  ========================================================
 */

  class CartComponent extends HTMLElement {
    constructor() {
        super(); 
      }

      connectedCallback() {
        this.innerHTML = `<i id="basketIcon" class="fa fa-shopping-basket"></i> (<span id="basket-count"></span>)`
      }
    }

    customElements.define('cart-component', CartComponent)
   
  