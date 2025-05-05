import express from 'express';
import  { MongoClient, ServerApiVersion } from 'mongodb';

async function startConnectionMongoDB(){
    const url = `mongodb+srv://maurovargas7725:Z6RA6StPd0VXmDjG@cluster0.xowngpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db('ShoppingCart');

    const app = express();
    
    app.use(express.json());
    
    async function populateCartFromIds(ids){
        return Promise.all(ids.map(id => db.collection('products').findOne({id})));
    }
    
    app.get('/users/:userId/cart', async (req, res)=>{
        const user = await db.collection('User').findOne({id: req.params.userId })
        const populatedCart = await populateCartFromIds(user.cartItems);
        res.json(populatedCart);
    });
    
    app.get('/products', async (req, res)=>{
        const products = await db.collection('products').find({}).toArray();
        res.send(products);
    });
    
    app.get('/products/:productId', async (req, res)=>{
        const product = await db.collection('products').findOne({id:req.params.productId});
        return res.json(product);
    });
    
    //Note id is stored in req
    //Add product in cart
    app.post('/users/:userId/cart', async (req,res)=>{
        const userId = req.params.userId;
        const productId = req.body.id;

        //Add product to users cart
        await db.collection('User').updateOne({id: userId},{
            //addToSet prevents duplicates, Push does not
            $addToSet: {cartItems: productId}
        });

        //Populate users cart
        const user = await db.collection('User').findOne({id: req.params.userId })
        const populatedCart = await populateCartFromIds(user.cartItems);
        res.json(populatedCart);
    });
    
    app.delete('/users/:userId/cart/:productId', async (req,res)=>{
        const userId = req.params.userId;
        const productId = req.params.productId
        //Add product to users cart
        await db.collection('User').updateOne({id: userId},{
            //addToSet prevents duplicates, Push does not
            $pull: {cartItems: productId}
        });


        //Populate users cart
        const user = await db.collection('User').findOne({id: req.params.userId })
        const populatedCart = await populateCartFromIds(user.cartItems);
        res.json(populatedCart);
    });
    
    app.listen(8000,()=>{
        console.log("Server is listening on port 8000");
    })
}

startConnectionMongoDB();