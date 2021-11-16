/*GET /items - this should render a list of shopping items.
POST /items - this route should accept JSON data and add it to the shopping list.
GET /items/:name - this route should display a single item’s name and price.
PATCH /items/:name, this route should modify a single item’s name and/or price.
DELETE /items/:name - this route should allow you to delete a specific item from the array.
*/

const express = require('express')
const app = express();
const itemRoutes = require("./routes/items")
const ExpressError = require('./expressError')

//middleware
app.use(express.json());
app.use("/items", itemRoutes);

//404 error handling
app.use(function(req, res, next) {
    return new ExpressError("Not Found", 404);
});

// general errors
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err.message
    });
});

//export app
module.exports = app