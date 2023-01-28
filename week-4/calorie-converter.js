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

// Import FoodModel
import { FoodModel } from "./food-model.js";

// Create and export CalorieConverter class
 export class CalorieConverter extends FoodModel {
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)
    ];

    // Static method to find corresponding item
    static find(foodName) {
        this.foodName = foodName;
        
        return this.data.filter((obj) => {
            if (this.foodName.includes(`${obj.name}`.toLowerCase())) return obj;
        });
        }
       }