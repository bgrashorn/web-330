/**
 =========================================================
 ; Title: float-max-field.js
 ; Author: Brett Grashorn
 ; Date: 7 February 2023
 ; Description: JavaScript code for Assignment 6.2
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_6 document
  ========================================================
 */

  // Creates and exports FloatMaxField class
 export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
// checks for correct parameters
    validate() {
      let value = parseFloat(this.field);
      if (value < this.max) {
        return true;
      } else {
        return false;
      }
    }
// Structures message 
    getMessage() {
      return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
  }
