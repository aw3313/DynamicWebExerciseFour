var firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAdtQ4uZqylMy7fljJaXx5HbXAjSClO5B4",
    authDomain: "exercise-four-ade48.firebaseapp.com",
    databaseURL: "https://exercise-four-ade48.firebaseio.com",
    projectId: "exercise-four-ade48",
    storageBucket: "exercise-four-ade48.appspot.com",
    messagingSenderId: "864716617113",
    appId: "1:864716617113:web:601f071d1506a102c28f08",
    measurementId: "G-B6DX7X21G5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const indexRoute = require('./routes/index.js');
const postRoute = require('./routes/post.js');
const createRoute = require('./routes/create.js');
/*--- Serve Static Files ---*/
app.use("/static", express.static("public"));
/*--- Routing in Express ---*/
app.use("/",indexRoute );
app.use("/post", postRoute);
app.use("/create", createRoute);

app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
