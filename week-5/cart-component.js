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

  // Creates CartComponent and extends it the HTML element
  class CartComponent extends HTMLElement {
    constructor() {
        super(); 
      }

      // Connects the component when called
      connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`
      }
    }

    customElements.define('cart-component', CartComponent)
   
  