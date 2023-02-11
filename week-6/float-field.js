/**
 =========================================================
 ; Title: float-field.js
 ; Author: Brett Grashorn
 ; Date: 7 February 2023
 ; Description: JavaScript code for Assignment 6.2
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_6 document
  ========================================================
 */

// Creates and exports FloatField class
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        // if not NaN return true, else return false
        if (!Number.isNaN(parseFloat(this.field))) {
            return true;
        } else {
            return false;
        }
    }

    // Structures return message
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
}