const express = require('express');
let {getProducts, getProductsById} = require('./getProducts');
let products = require('../products.json');

let app = express();

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProductsById)


app.listen(3000, ()=>console.log('Im listening'));