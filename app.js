const express = require("express");

const app = express();

// app.use((req, res, next) => {
//    console.log("First middleware");
//    next();
// });

// app.use((req, res, next) => {
//    console.log("Second middleware");
//    res.send("<h1>Express works!</h1>")
// });

app.use("/users", (req, res, next) => {
   res.send("<h1>Users</h1><ul><li>Guna</li><li>Sekar</li></ul>")
});

app.use("/", (req, res, next) => {
   res.send("/ Nothing page!>")
});


app.listen(3001);