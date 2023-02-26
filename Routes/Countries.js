const express = require("express");
const router = express.Router()
const fs = require("fs");


// this function is to read from the JSON file
const countries = () => {
    const readData = JSON.parse(fs.readFileSync("./Data/data.json"))
    return readData;
}


// creating a route for the countries

router.get("/", (req, res) => {
    res.send(countries()).status(200)
});

module.exports = router

