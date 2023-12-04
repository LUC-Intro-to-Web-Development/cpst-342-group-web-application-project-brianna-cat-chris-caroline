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

//Delete a restaurant item

//Display all restaurant items
let getAllItems = (res) => {
    var getAllRestaurants = 'SELECT id, name, neighborhood, rating, cuisine FROM grocery_item';
    db.all(getAllRestaurants, function(err, rows){
        if (err) {
         
            throw err;
          }
          console.log(rows);

    })
}

//Display select restaurant items by neighborhood
let getNeighborhoodRestaurants = (neighbhorhood, res) =>{
    var getNeighborhood = 'SELECT id, name, neighborhood FROM restaurant_items WHERE neighborhood = ?' //Parameterized Query
    var params = [neighbhorhood];
    
    db.get(getNeighborhood, params, function(err, row){

        if(err){
            return console.log(err.message);
        }
        
        console.log(`Returned Row${this.changes}`);

        res.render('list.html', {row});
    })
    getAllItems(res);

}


//Display select restaurant items by cuisine