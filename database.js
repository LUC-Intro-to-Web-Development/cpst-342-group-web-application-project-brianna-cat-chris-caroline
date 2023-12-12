var sqlite3 = require('sqlite3').verbose() //npm install sqlite3

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./chirest.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
	  // Cannot open database
	  console.error(err.message)
	  throw err
	}else{
		//Successful database connection
		console.log('Connected to the SQLite database.') 
	}
});

//Add a restaurant item
let createItem = (restaurantName, neighborhood, rating, res) =>{
    var createRestaurantItem = 'INSERT INTO restaurant_items (name, neighborhood, rating) VALUES (?,?,?)' //Parameterized Query
    var params = [restaurantName, neighborhood, rating];
    
    db.run(createRestaurantItem, params, function(err){

        if(err){
            return console.log(err.message);
        }
        
        console.log("Restaurant Item Created");
        console.log(`Rows inserted ${this.changes}`);

        res.render('index.html');
    })
    getAllItems(res);

}

<<<<<<< HEAD
/*Delete a restaurant item
let deleteItem = (recordToDelete, res) =>{
=======
//Delete a restaurant item
/*let deleteItem = (recordToDelete, res) =>{
>>>>>>> api
    
    var deleteRestaurantItem = 'DELETE FROM restaurant_items WHERE id = ?';
	
    var params = [recordToDelete];

	db.run(deleteRestaurantItem, params, function(err){
		if (err){
			return console.log(err.message);
		}
    

		console.log("Restaurant Item Deleted");
		console.log(`Rows deleted ${this.changes}`);	  
	});

    getAllItems(res);
}*/

//Update a restaurant item
<<<<<<< HEAD
/*let updateItem = (name, neighbhorhood, id, rating, cuisine, res) =>{
    var updateGroceryListItem = 'UPDATE restaurant_items SET name = ?, neighborhood = ?, rating = ?, cuisine = ? WHERE id = ?'
=======
/*let updateItem = (aRestaurant, res) =>{
    var updateRestaurantItem = 'UPDATE restaurant_items SET rating = 5 WHERE name = ?';
>>>>>>> api
    var params = [name, neighbhorhood, id, rating, cuisine];

    db.run(updateGroceryListItem, params, function(err) {
        if (err){
			return console.log(err.message);
		}
    

        console.log("Restaurant Item Updated");
        console.log(`Rows updated ${this.changes}`);
    })

    getAllItems(res);
}*/

//Display all restaurant items
<<<<<<< HEAD
/*let getAllItems = (res) => {
    var getAllRestaurants = 'SELECT id, name, neighborhood, rating, cuisine FROM restaurant_items';
=======
let getAllItems = (res) => {
    var getAllRestaurants = 'SELECT id, name, neighborhood, rating FROM restaurant_items';
>>>>>>> api
    db.all(getAllRestaurants, function(err, rows){
        if (err) {
         
            throw err;
          }
          console.log(rows);
          
    })
}*/

//Display select restaurant items by neighborhood
/*let getNeighborhoodRestaurants = (neighbhorhood, res) =>{
    var getNeighborhood = 'SELECT id, name, neighborhood, rating, cuisine FROM restaurant_items WHERE neighborhood = ?' //Parameterized Query
    var params = [neighbhorhood];
    
    db.get(getNeighborhood, params, function(err, row){

        if(err){
            return console.log(err.message);
        }
        
        console.log(`Returned Row${this.changes}`);

        res.render(neighbhorhood + '.html', {row});
    })
    getAllItems(res);

}*/


//Display select restaurant items by cuisine

<<<<<<< HEAD
module.exports = {createItem}
=======
module.exports = {createItem, getAllItems}
>>>>>>> api
