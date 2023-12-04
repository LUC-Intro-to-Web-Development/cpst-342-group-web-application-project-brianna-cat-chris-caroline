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
let createItem = (name, neighborhood, rating, cuisine, res) =>{
    var createRestaurantItem = 'INSERT INTO restaurant_items (name, neighborhood, rating, cuisine) VALUES (?,?,?,?)' //Parameterized Query
    var params = [name, neighborhood, rating, cuisine];
    
    db.run(createRestaurantItem, params, function(err){

        if(err){
            return console.log(err.message);
        }
        
        console.log("Restaurant Item Created");
        console.log(`Rows inserted ${this.changes}`);
    })
    getAllItems(res);

}

//Delete a restaurant item
let deleteItem = (recordToDelete, res) =>{
    
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
}

//Update a restaurant item
let updateItem = (name, neighbhorhood, id, rating, cuisine, res) =>{
    var updateGroceryListItem = 'UPDATE restaurant_items SET name = ?, neighborhood = ?, rating = ?, cuisine = ? WHERE id = ?'
    var params = [name, neighbhorhood, id, rating, cuisine];

    db.run(updateGroceryListItem, params, function(err) {
        if (err){
			return console.log(err.message);
		}
    

        console.log("Restaurant Item Updated");
        console.log(`Rows updated ${this.changes}`);
    })

    getAllItems(res);
}

//Display all restaurant items
let getAllItems = (res) => {
    var getAllRestaurants = 'SELECT id, name, neighborhood, rating, cuisine FROM restaurant_items';
    db.all(getAllRestaurants, function(err, rows){
        if (err) {
         
            throw err;
          }
          console.log(rows);

    })
}

//Display select restaurant items by neighborhood
let getNeighborhoodRestaurants = (neighbhorhood, res) =>{
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

}


//Display select restaurant items by cuisine

module.exports = {deleteItem, createItem, getAllItems, getNeighborhoodRestaurants, updateItem}