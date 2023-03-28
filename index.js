const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const storeRoute = require('./route/store.route');
const bookRoute = require('./route/book.route')

const app = express();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


app.get("/" , function(req , res) {
     res.send("Server started ........");
    //res.sendFile(__dirname + '/index.html')
});

app.use("/api/v1" , storeRoute);

app.use("/api/v1" , bookRoute);






app.listen(4000, () => {
    console.log(`Server start ....... `)
})
