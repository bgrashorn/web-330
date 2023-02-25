/**
 =========================================================
 ; Title: http-client.js
 ; Author: Brett Grashorn
 ; Date: 24 February 2023
 ; Description: JavaScript code for Assignment 8.2
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_8 document
  ========================================================
 */

export class HttpClient {
    async get(url, params = "") {
        let newUrl = new URL(url);
        newUrl.search = new URLSearchParams(params);

        const res = await fetch(newUrl.toString(), {
            method: "GET",
        })
        return res.json();
    }
}