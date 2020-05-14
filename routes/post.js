var firebase = require("firebase");
const express = require('express');
const router = express.Router();
const db = firebase.firestore();

const blogposts = db.collection("blogposts"); //reference to collections

router.get("/", (req, res) => res.send("Please include an ID"));

router.get("/:id", (req, res) => {
  const queryID = req.params.id; //getting query id for the post, /:name and query.name just have to be the same
    //get single item
    blogposts.doc(queryID).get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", doc.data());
            return res.send(doc.data());
        } else {
            // doc.data() will be undefined in this case
            //console.log("No such document!");
            return res.send("No such document exists");
        }
      }).catch(function(error) {
              //console.log("Error getting document:", error);
              return res.send(error);
          });
          }
      );


module.exports = router;
