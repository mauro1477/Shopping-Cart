import express from 'express';
import { cartItems as cartItemsRaw, products as productsRaw} from './temp-data';
let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();

app.use(express.json());

function populateCartFromIds(ids){
    return ids.map(id => products.find(product => product.id === id));
}

app.get('/cart', (req, res)=>{
    const populatedCart = populateCartFromIds(cartItems);
    res.json(populatedCart);
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
//Add product in cart
app.post('/cart', (req,res)=>{
    const productId = req.body.id;
    cartItems.push(productId);
    const populatedCart = populateCartFromIds(cartItems);
    res.json(populatedCart);
});

app.delete('/cart/:productId', (req,res)=>{
    const productId = req.params.productId;
    cartItems = cartItems.filter(id => id !== productId);
    const populatedCart = populateCartFromIds(cartItems)
    res.json(populatedCart);
});

app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})