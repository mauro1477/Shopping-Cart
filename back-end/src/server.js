import express from 'express';
import { cartItems as cartItemsRaw, products as productsRaw} from './temp-data';
let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();

app.use(express.json());

app.get('/cart', (req, res)=>{
    return res.json(cartItems);
});

app.get('/products', (req, res)=>{
    return res.json(products);
});

app.get('/products/:productId', (req, res)=>{
    const productId = req.params.productId;
    const product = products.find(product => product.id === productId);
    return res.json(product);
});

//Note id is stored in req
app.post('/cart', (req,res)=>{
    const productId = req.body.id;
    const product = products.find(product => product.id  === productId);
    cartItems.push(product);
    res.json(cartItems);
});

app.delete('/cart/:productId', (req,res)=>{
    const productId = req.params.productId;
    cartItems = cartItems.filter(product => product.id !== productId);
    res.json(cartItems);
});

app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})