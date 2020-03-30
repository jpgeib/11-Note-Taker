const express = require('express');

const path = require('path');
const app = express();

// If we are in production (Heroku), process.env.PORT is true, 
// If we are in development it is false, default to 3000
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});