const express = require("express");
const mongoose = require("mongoose")

const app = express();

mongoose.connect('mongodb+srv://ratemyfoodadmin:YNvYjNoPe3KS3p7i@ratemyfood.jud4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=>{app.listen(3000, "Server is live")});



app.listen(3000, "Server is live")