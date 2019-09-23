const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbroot:plokiju78@crud-node-bpm2g.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, (err, client) =>{
    if(err) return console.log(err)
    db = client.db('crud-node');
})

app.get('/', (req, res)=>{
    //res.render('index.ejs');
    let cursos = db.collection('data').find();
});

app.post('/show', (req, res)=>{
    db.collection('data').save(req.body, (err, result)=>{
        if(err) return console.log(err);

        console.log('salvo no banco de dados');
        res.redirect('/');
    })
});