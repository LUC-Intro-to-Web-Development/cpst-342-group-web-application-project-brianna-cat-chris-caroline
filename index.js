const express = require('express')
const app = express()
const port = 3000

// view engine setup -> We'll use handlebars.js as our templating engine
app.set('view engine', 'html');
// allows our application to use .html extension 
app.engine('html', require('hbs').__express);

 // parse application/json
 app.use(express.json());

 // For parsing application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: true }));


function displayAge(userAge) {
    console.log('I am ' + userAge + ' years old.');
 }

displayAge(34)

 function displaySub(num1, num2) {
    console.log(num1 - num2)
 }

 displaySub(18, 6)

 let madLib = function(adverb, verb, noun1, noun2, adj) {
    return ("The " + adj + " " + noun1 + " " + adverb + " " + verb + " the " + noun2 + ".");
 }

 console.log(madLib("quickly", "chased", "dog", "cat", "large"))

 function displayAdd (num1, num2) {
    console.log(num1 + num2)
 }

 displayAdd(18, 6)