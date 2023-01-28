/**
 =========================================================
 ; Title: food-model.js
 ; Author: Brett Grashorn
 ; Date: 27 January 2023
 ; Description: JavaScript code for Assignment 4.
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_4 document
  ========================================================
 */

//  Create and export FoodModel class
export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}