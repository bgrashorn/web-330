/**
 =========================================================
 ; Title: calorie-converter.js
 ; Author: Brett Grashorn
 ; Date: 27 January 2023
 ; Description: JavaScript code for Assignment 4.
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_4 document
  ========================================================
 */

import { FoodModel } from "./food-model.js";

 export class CalorieConverter {
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)
    ];
    static find(query) {
        return CalorieConverter.data.filter(dataset => dataset.name.includes(query));
    }
}