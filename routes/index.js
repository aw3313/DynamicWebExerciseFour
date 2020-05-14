var firebase = require("firebase");
const express = require('express');

const router = express.Router();
const db = firebase.firestore();
router.get("/", (req, res) => {
  var posts = [];
  db.collection("blogposts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        posts.push(doc.data());
    });
    return res.send(posts);
  })
  .catch(function(error) {
    console.log("Error:", error);
    return res.send(error);
  });
});


module.exports = router;
