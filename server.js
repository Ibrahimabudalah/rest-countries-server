const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")


//enabling cors

app.use(cors)

//router
const route = require("./Routes/Countries")
app.use("/", route)


//listner function
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT || 8080}`)
})