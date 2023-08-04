import express from "express";
import db from "../db";

const beersRouter = express.Router();

// CREATE
beersRouter.post('/', function (req, res) {
  db.serialize(() => {
    db.run('INSERT INTO beers(id, name) VALUES(?, ?)', [req.body.id, req.body.name], function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log("New beer has been added.");
      res.setHeader("Content-Type", "application/json");
      res.status(201);
      res.json({
        id: this.lastID,
        name: req.body.name,
      });
      res.send();
    });
  });
});

// READ
// ALL
beersRouter.get('/', function (req, res) {
  db.serialize(() => {
    db.all('SELECT * FROM beers', [], function(err, rows) {
      if (err) {
        res.send("Error encountered while displaying.");
        return console.log(err.message);
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(rows);
      res.send();
      console.log("Entry displayed successfully.");
    });
  });
});

// ONE
beersRouter.get('/:id', function (req, res) {
  db.serialize(() => {
    db.each('SELECT * FROM beers WHERE id = ?', [req.params.id], function(err, row) {
      if (err) {
        res.send("Error encountered while displaying.");
        return console.log(err.message);
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(row);
      res.send();
      console.log("Entry displayed successfully.");
    });
  });
});

// UPDATE
beersRouter.patch('/:id', function (req, res) {
  db.serialize(() => {
    db.run('UPDATE beers SET name = ? WHERE id = ?', [req.body.name, req.params.id], function(err) {
      if (err) {
        res.send("Error encountered while updating.");
        return console.log(err.message);
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json({
        id: req.params.id,
        name: req.body.name,
      });
      res.send();
      console.log("Entry updated successfully.");
    });
  });
});

// DELETE
beersRouter.delete('/:id', function (req, res) {
  db.serialize(() => {
    db.run('DELETE FROM beers WHERE id = ?', [req.params.id], function(err) {
      if (err) {
        res.send("Error encountered while deleting.");
        return console.log(err.message);
      }
      res.setHeader("Content-Type", "application/json");
      res.status(204);
      res.json({
        id: req.params.id,
        name: req.body.name,
      });
      res.send();
      console.log("Entry deleted successfully.");
    });
  });
});

// CLOSE DB
beersRouter.post('/close', function(req,res){
  console.log("test");
  db.close((err) => {
    console.log("ça rentre");
    if (err) {
      res.send('There is some error in closing the database');
      return console.error(err.message);
    }
    console.log('Closing the database connection.');
    res.send('Database connection successfully closed');
  });
});

export default beersRouter;
