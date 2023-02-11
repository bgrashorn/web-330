/**
 =========================================================
 ; Title: float-min-field.js
 ; Author: Brett Grashorn
 ; Date: 7 February 2023
 ; Description: JavaScript code for Assignment 6.2
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_6 document
  ========================================================
 */

//   Creates and exports FloatMinField class
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
// Checks for correct parameters
    validate() {
        let value = parseFloat(this.field);
        if (value > this.min) {
            return true;
        } else {
            return false;
        }
    }
// Structures message
    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}