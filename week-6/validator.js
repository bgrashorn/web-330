/**
 =========================================================
 ; Title: validator.js
 ; Author: Brett Grashorn
 ; Date: 7 February 2023
 ; Description: JavaScript code for Assignment 6.2
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_6 document
  ========================================================
 */

// Imports necessary pages
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField} from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Creates and exports Validator class
export class Validator {
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // Pushes new instances for each field
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // Validates  and calls iterated array
    validate() {
        for (let i of this.validators) {
            if (i.validate() === false) {
                this.messages.push(i.getMessage());
                return false;
            }
        }
        return true;
    }
}