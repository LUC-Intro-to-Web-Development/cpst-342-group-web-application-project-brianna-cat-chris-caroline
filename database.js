const { create } = require('hbs');

var sqlite3 = require('sqlite3').verbose() //npm install sqlite3

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.

var db= new sqlite3.Database('./chirest.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    //Successful database connection
    console.log('Connected to the SQLite database.') 
    getAllItems();
});

function createDatabase() {
    db = new sqlite3.Database('chirest.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables();
    });
}

function createTables() {
    db.exec(`
    CREATE TABLE IF NOT EXISTS rating_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        neighborhood TEXT NOT NULL,
        rating REAL NOT NULL,
        total INTEGER NOT NULL)
        `,(err) => {
            if (err) {
              console.error(err.message);
            } else {
            console.log("Database created.");
            populateTable();
        }});
}

function populateTable(){
     //Make request to API for one-time startup init of database
   fetch('https://6566a88864fcff8d730ef1a5.mockapi.io/api/chirest/restaurants')
   .then(response => {
      return response.json();
   } ) 
   .then(data =>{
      var initalTotal = 1;
      data.forEach(entry => {
         createItem(entry.name, entry.neighborhood, entry.rating, initalTotal, null);
      });
      console.log("database populated from API");
   })
   .catch(error => console.log(error));
}

//Add a restaurant item
let createItem = (name, neighborhood, rating, total, res) =>{
    var createRestaurantItem = 'INSERT INTO rating_items (name, neighborhood, rating, total) VALUES (?,?,?,?)';
    var params = [name, neighborhood, rating, total];
    
    db.run(createRestaurantItem, params, function(err){
        if(err){
            return console.log(err.message);
        }
        console.log("Restaurant Item Created");
        console.log(`Rows inserted ${this.changes}`);
    })
    //getAllItems(res);
}

//Delete a restaurant item
/*let deleteItem = (recordToDelete, res) =>{
    
    var deleteRestaurantItem = 'DELETE FROM rating_items WHERE id = ?';
	
    var params = [recordToDelete];

	db.run(deleteRestaurantItem, params, function(err){
		if (err){
			return console.log(err.message);
		}
    

		console.log("Restaurant Item Deleted");
		console.log(`Rows deleted ${this.changes}`);	  
	});

    //getAllItems(res);
}*/

//Update a rating
let updateRating = async (name, neighborhood, guestRating, res) =>{
    const item  = await getItemByNAndN(name, neighborhood, res) 
        if (item == null){
            console.log("UPDATE FAILURE!");
            return; // skipping this until the async stuff is figured out
        }
        var oldRating = item.rating;
        // https://math.stackexchange.com/questions/22348/how-to-add-and-subtract-values-from-an-average
        var newTotal = item.total +1;
       // var newRating = oldRating + ((guestRating-oldRating)/(newTotal));
        var update = 'UPDATE rating_items SET rating = ? WHERE name = ?';
        var params = [newRating, newTotal, name, neighborhood];
        db.run(update, params, function(err) {
            if (err){
                throw err;
            }
            console.log("Restaurant Rating Updated");
            console.log(`Rows updated ${this.changes}`);
        });
}

//Get restaurant ratings
let getItemByNAndN = async (name, neighborhood, res) => {
    // Check to see if db item exists
    var getRestaurant= 'SELECT * FROM rating_items WHERE name = ? AND neighborhood = ?';
    var params = [name, neighborhood];
    db.all(getRestaurant, params, function(err, rows){
        if (err) {
            //assume does not exist
            console.log("Could not find item!");
            return null
        }
        console.log("ROWS FOUND:",rows);
        return `${rows.entries[0]}`; //assume no duplicates from API
    });
}

//Display all restaurant items
let getAllItems = (res) => {
    var getAllRestaurants = 'SELECT * FROM rating_items';
    db.all(getAllRestaurants, function(err, rows){
        if (err) {
         
            throw err;
          }
          console.log(rows);
          return rows;
    });
}

module.exports = {createItem,updateRating,getItemByNAndN}