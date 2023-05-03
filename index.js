const express = require('express');
const port = process.env.PORT || 8000;
const mongooseConnection = require("./config/mongoose");
const Doctor = require('./models/doctor');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use('/', require('./router/index'));
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port : ", port);
    }
});