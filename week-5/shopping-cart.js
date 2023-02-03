/**
 =========================================================
 ; Title: shopping-cart.js
 ; Author: Brett Grashorn
 ; Date: 31 January 2023
 ; Description: JavaScript code for Assignment .
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_5 document
  ========================================================
 */

//   Creates and exports ShoppingCart class
export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // Counts the length of products array
    count() {
        return this.products.length
    }
    // Adds project object to the array
    add(product) {
        this.products.push(product)
    }

    // generates a list of products
    * listProducts() {
        for (let product of this.products) {
            yield product;
        }
    }
}
