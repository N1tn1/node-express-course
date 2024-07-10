console.log('Express Tutorial');
const express = require('express');
const { products, people } = require('./data');
const peopleRouter = require('./routes/people');
const cookieParser= require('cookie-parser');
const authMiddleware = require('./middleware/auth');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('./methods-public'));
app.use("/api/v1/people", peopleRouter);


const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
app.use(logger);
/*app.get('/', logger, (req, res) => {
    res.send('Hey Class');
  });*/


app.get('/api/v1/test', (req, res) => {
    res.json({message: "It worked!"});
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

app.post("/logon", (req, res) => {
    const { name } = req.body;

    if (name) {
        res.cookie("name", name);
        res.status(201).json({ message: `Hello, ${name}!` });
    } else {
        res.status(400).json({ message: "Please provide a name in the body" });
    }
});

app.delete("/logoff", (req, res) => {
    res.clearCookie("name");
    res.status(200).json({ message: "User logged off" });
});

app.get("/test", authMiddleware, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user}!` });
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});