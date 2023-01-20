/**
 =========================================================
 ; Title: appetizer.js
 ; Author: Brett Grashorn
 ; Date: 17 January 2023
 ; Description: JavaScript code for Assignment 3.
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_3 document
  ========================================================
 */

import { Product } from "./product.js";

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}