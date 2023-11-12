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