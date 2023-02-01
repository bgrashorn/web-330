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
        function Callback() {
            this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;                                             
        }
    }
  }

  