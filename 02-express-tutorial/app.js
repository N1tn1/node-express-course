console.log('Express Tutorial');
const express = require('express');
const {products} = require('./data');
const app = express();

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
    const productID = req.params.productID;
    const product = products.find(p => p.id === parseInt(productID));
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        res.json(product);
    }
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products]; 

    if (search) 
    {
        sortedProducts = sortedProducts.filter(product =>
            product.name.toLowerCase().startsWith(search.toLowerCase())
        );
    }

    if (limit) 
    {
        sortedProducts = sortedProducts.slice(0, parseInt(limit));
    }
    
    sortedProducts = sortedProducts.filter(product => product.price < 20.00);

    res.json(sortedProducts);
});

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000);
console.log("Server is listening on port 3000");