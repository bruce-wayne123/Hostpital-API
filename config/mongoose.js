const mongoose = require("mongoose");
const url = `mongodb+srv://ckent8040:Google%40123@cluster0.0eq8is5.mongodb.net/test?retryWrites=true&w=majority`;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    });

module.exports = mongoose;