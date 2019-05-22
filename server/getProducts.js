let products = require('../products.json');

module.exports.getProducts = function(req,res,next){
    if(req.query.price){
        res.send(products.filter(item => {
            return item.price > req.query.price;
        })).status(200);
    } else{
        res.send(products).status(200);
    }
}
module.exports.getProductsById = (req,res,next) => {
    // console.log(products)
    let product = products.find(item => item.id == req.params.id)
    if(!product) product = 'Product Not Found'
    res.send(product).status(200);
}

module.exports.getFilteredProducts = (req,res,next) => {
    
}