/**
 =========================================================
 ; Title: product.js
 ; Author: Brett Grashorn
 ; Date: 31 January 2023
 ; Description: JavaScript code for Assignment .
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_5 document
  ========================================================
 */

  // Creates and exports Product class
  export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
  }