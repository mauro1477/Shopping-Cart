import express from 'express';
import  { MongoClient, ServerApiVersion } from 'mongodb';
import path, { resolve } from 'path';
async function startConnectionMongoDB(){
    const url = `mongodb+srv://maurovargas7725:Z6RA6StPd0VXmDjG@cluster0.xowngpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db('ShoppingCart');

    const app = express();
    
    app.use(express.json());
    app.use('/images', express.static(path.join(__dirname, '../assets')));

    app.use(express.static(
        path.resolve(__dirname, '../dist'),
        { maxAge: '1y', etag: false },
    ));

    async function populateCartFromIds(ids){
        return Promise.all(ids.map(id => db.collection('products').findOne({id})));
    }
    
    app.get('/api/users/:userId/cart', async (req, res)=>{
        const user = await db.collection('User').findOne({id: req.params.userId })
        const populatedCart = await populateCartFromIds(user?.cartItems || []);
        res.json(populatedCart);
    });
    
    app.get('/api/products', async (req, res)=>{
        const products = await db.collection('products').find({}).toArray();
        res.json(products);
    });
    
    app.get('/api/products/:productId', async (req, res)=>{
        const product = await db.collection('products').findOne({id:req.params.productId});
        return res.json(product);
    });
    
    //Note id is stored in req
    //Add product in cart
    app.post('/api/users/:userId/cart', async (req,res)=>{
        const userId = req.params.userId;
        const productId = req.body.id;

        //Add product to users cart
        await db.collection('User').updateOne({id: userId},{
            //addToSet prevents duplicates, Push does not
            $addToSet: {cartItems: productId}
        });

        //Populate users cart
        const user = await db.collection('User').findOne({id: req.params.userId })
        const populatedCart = await populateCartFromIds(user?.cartItems || []);
        res.json(populatedCart);
    });
    
    app.delete('/api/users/:userId/cart/:productId', async (req,res)=>{
        const userId = req.params.userId;
        const productId = req.params.productId
        //Add product to users cart
        await db.collection('User').updateOne({id: userId},{
            //addToSet prevents duplicates, Push does not
            $pull: {cartItems: productId}
        });


        //Populate users cart
        const user = await db.collection('User').findOne({id: req.params.userId })
        const populatedCart = await populateCartFromIds(user?.cartItems || []);
        res.json(populatedCart);
    });
    
    app.get(/(.*)/, (req, res)=>{
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    const port = process.env.PORT || 8000;

    app.listen(port,()=>{
        console.log("Server is listening on port" + port);
    })
}

startConnectionMongoDB();