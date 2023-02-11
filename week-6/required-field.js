/**
 =========================================================
 ; Title: required-field.js
 ; Author: Brett Grashorn
 ; Date: 7 February 2023
 ; Description: JavaScript code for Assignment 6.2
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_6 document
  ========================================================
 */

// Creates and exports RequiredField class
 export class RequiredField {
    constructor(name, field) {
    this.name = name;
    this.field = field;
    }
    validate() {
        return Boolean(this.field);
    }
    getMessage() {
        return "<name> is a required field.";
    }
}
