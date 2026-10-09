
const express = require("express")
const app = express()



app.use(express.json());
app.use(express.urlencoded({extendend:true}));
const PORT = 5000
app.listen(PORT,()=>{
    console.log("MongoDB connected succesfully",PORT)
})