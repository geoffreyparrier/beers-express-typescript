import * as sqlite3 from "sqlite3";
import beers from './public/beerExamples.json'

// Create a db for development and another one for production
const db = new sqlite3.Database( __dirname + '/database.sqlite');

db.run('CREATE TABLE IF NOT EXISTS beers(id TEXT, name TEXT, image_url TEXT, description TEXT)');

// insert exampleJSON inside db
db.serialize(function() {
  beers.forEach(({id, name, description, image_url}) => {
    db.run('INSERT INTO beers VALUES(?, ?, ?, ?)', [id, name, description, image_url], function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  })
});

export default db;
