// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all burgers
  // Serve index.handlebars to the root route.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { burgers: data });
    });
  });

  // Add a burger
  app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [req.body.burgerName], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

//   app.delete("/api/burgers/:id", function(req, res) {
//     connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.affectedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
  
//     });
//   });
};