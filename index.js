const express = require('express')
const dbOperations = require('./database.js')
const app = express()
const port = 3000

// view engine setup -> We'll use handlebars.js as our templating engine
app.set('view engine', 'html');
// allows our application to use .html extension 
app.engine('html', require('hbs').__express);

 // parse application/json
 app.use(express.json());

 // static files in assets folder
 app.use(express.static('assets'));
 app.use(express.static('css'));

 // For parsing application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: true }));

 // Route to  home
app.get('/', function (req, res) {
	
   // Use res.sendFile to send an HTML file directly
   res.render('index');
})



app.get('/restaurant/:id', function (req, res) {
   console.log('Coming from display page');

   var aRestaurant = req.params.id;

   var specificRestaurant= {};
   //Make request to API
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 
   .then(data =>{
      data.forEach(restaurant => {
         
         if (restaurant.id == aRestaurant){
           specificRestaurant = restaurant;
         }
      });
      console.log(specificRestaurant);
      res.render('restaurant', {specificRestaurant});

   })
   .catch(error => console.log(error));

}) 

app.post('/update', function (req, res) {

   var restaurantName = req.body.cuisine_display;
   // var specificNeighborhood = [];
   var rest = [];
   //Make request to API
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 

   dbOperations.updateItem(restaurantName);
})

//end of cuisine post route

app.post('/addRestaurant', function(req, res) {
   console.log("Entering info from display page");

   var restaurantName = req.body.cuisine_display;
   var rating = req.body.rate;
   var neighborhood = req.body.neighborhood;

   console.log(restaurantName);
   console.log(rating);
   console.log(neighborhood);

   dbOperations.createItem(restaurantName, neighborhood, rating, res);

})

/*app.get('/lakeview', function (req, res) {
	
   //Use res.sendFile to send an HTML file directly
   res.render('lakeview');
})

app.get('/lincolnpark', function (req, res) {
	
   //Use res.sendFile to send an HTML file directly
   res.render('lincolnpark');
})

app.get('/rogerspark', function (req, res) {
	
   //Use res.sendFile to send an HTML file directly
   res.render('rogerspark');
})*/

app.post('/cuisine', function (req, res) {

   var cuisineGenre = req.body.cuisine;
   var specificCuisine = [];
   //Make request to API
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 
   .then(data =>{
      data.forEach(restaurant => {
         
         if (restaurant.cuisine == cuisineGenre){
            specificCuisine.push(restaurant);
         }
      });
      console.log(specificCuisine.length);
      res.render('index', {specificCuisine});

   })
   .catch(error => console.log(error));
}) //end of cuisine post route

app.post('/neighborhood', function (req, res) {

   var neighborhoodType = req.body.neighborhood;
   var specificNeighborhood = [];

   //Make request to API
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 
   .then(data =>{
      data.forEach(restaurant => {
         
         if (restaurant.neighborhood == neighborhoodType){
            specificNeighborhood.push(restaurant);
         }
      });
      console.log(specificNeighborhood.length);
      res.render('index', {specificNeighborhood});

   })
   .catch(error => console.log(error));
})




//end of neighborhood post route


//app.post('/get_lakeview', function (req, res) {
	// Getting body parameters
	//const {neighborhood} = req.body;

	//dbOperations.getNeighborhoodRestaurants(neighborhood, res);
	
	
//})
 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// function displayAge(userAge) {
//     console.log('I am ' + userAge + ' years old.');
//  }

// displayAge(34)

//  function displaySub(num1, num2) {
//     console.log(num1 - num2)
//  }

//  displaySub(18, 6)

//  let madLib = function(adverb, verb, noun1, noun2, adj) {
//     return ("The " + adj + " " + noun1 + " " + adverb + " " + verb + " the " + noun2 + ".");
//  }

//  console.log(madLib("quickly", "chased", "dog", "cat", "large"))

//  function displayAdd (num1, num2) {
//     console.log(num1 + num2)
//  }

//  displayAdd(18, 6)

