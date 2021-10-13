const express = require("express");
const routes = new express.Router();

let products = [{
            id:"1",
            name:"book"
        },
        {
            id:"2",
            name:"pen"
        }]


routes.get("/",(req,res) => {
    res.send(products)
})

routes.get("/:id",(req,res) => {
    const product =products.find(i=>i.id == req.params.id);
    res.send(product)
})

module.exports = routes;