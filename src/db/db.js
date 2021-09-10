const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://virat:pandey@cluster0.ltsvd.mongodb.net/Enquery?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected succusfully");
})