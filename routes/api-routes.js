require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path")

// API Routes
module.exports = function(app) {
  app.get("/api/books", (req, res) => {
    db.Book.find().then(
      (booksData) => {
        res.json(booksData);
      }
    ).catch(
      (err) => {
        res.json({error: err});
      }
    );
  });

  app.post("/search", (req, res) => {
    let bookTitle = req.body.title.replace(/\s/g, "+");
    axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
    ).then(
      (response) => {
        res.json(response.data.items)
      }
      ).catch(
        (err) => {
          res.json({error: err})
        }
      );
   });

   app.post("/api/books", (req, res) => {
     db.Book.create(req.body).then(
       (response) => {
         res.json({successful: response})
       }
     ).catch(
       (err) => {
         res.json({error: err});
       }
     );
   });

   app.delete("/api/books/:id", (req, res) => {
     db.Book.findByIDAndDelete(req.params.id).then(
       (response) => {
         res.json({successful: response});
       }
     ).catch(
       (err) => {
         res.json({error: err})
       }
     );
   });

// If no API routes are hit, send the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

}