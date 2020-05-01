const express = require("express");
const myRoutes = require("./routes/myRoutes");
const path = require("path");
const rootDir = require("./util/path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, "public")));

app.use(myRoutes);

// not-found
app.get((req, res) => {
   res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3001);