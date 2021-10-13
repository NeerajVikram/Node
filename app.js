const express = require('express');
const app = new express();

const productRoutes = require('./products/routes');

app.use("/api/products", productRoutes);

app.get('/',(req,res)=>{
    res.send("Home")
})

app.listen(3000,()=>console.log("server started"))