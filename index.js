const express = require('express');
const path = require('path');
const dbOperations = require('./database.js');
const app = express();
const port = 3000;

// view engine setup -> We'll use handlebars.js as our templating engine
app.set('view engine', 'html');
// allows our application to use .html extension 
app.engine('html', require('hbs').__express);

 // parse application/json
 app.use(express.json());

 // static files in assets folder
 app.use("/assets", express.static(path.join(__dirname, 'assets')));
 app.use("/css", express.static(path.join(__dirname, 'css')));

 // For parsing application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: true }));

 // Route to  home
app.get('/', function (req, res) {
   res.render('index');
})

app.post('/cuisine', function (req, res) {

   var cuisineGenre = req.body.cuisine;
   console.log(cuisineGenre);
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
      res.render('list', {specificCuisine});

   })
   .catch(error => console.log(error));
});

app.post('/neighborhood', function (req, res) {

   var location = req.body.neighborhood;
   var specificNeighborhood = [];
   //Make request to API
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 
   .then(data =>{
      data.forEach(async restaurant => {
         
         if (restaurant.neighborhood == location){
            //overwrite rating from api with one from database for displaying
            //const item = await dbOperations.getItemByNAndN(restaurant.name, restaurant.neighborhood, res);
            //item.rating;
            console.log("api rating: ", restaurant.rating);
            specificNeighborhood.push(restaurant);
            };
   });
      console.log(specificNeighborhood.length);

      specificNeighborhood.forEach(async entry =>{ //don't know how to do that
         //const item = await dbOperations.getItemByNAndN(entry.name, entry.neighborhood, res);
         //entry.rating = item.rating;
         //console.log("db rating: ", entry.rating);
      });
      res.render('list', {specificNeighborhood});
   })
   .catch(error => console.log(error));
});

app.post('/restaurant', function (req, res) {

   var name = req.body.name;
   var location = req.body.location;
   var specificRestaurant = null;
   //Make request to API
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 
   .then(data =>{
      data.forEach(restaurant => {
         if (restaurant.name == name && restaurant.neighborhood == location){
           specificRestaurant = restaurant;
         }
      });
      console.log("Selected: ", specificRestaurant);
      res.render('restaurant', {specificRestaurant});

   })
   .catch(error => console.log(error));
});

app.post('/rate', async function (req, res) {

   var name = req.body.name;
   var neighborhood = req.body.neighborhood;
   var rating = req.body.rating;
   // Update db entry for restaurant with rating (create entry if needed)
   await dbOperations.updateRating(name, neighborhood, rating);
   res.send("success");
});
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
