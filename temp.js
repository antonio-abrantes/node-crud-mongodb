const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbroot:<senha>@crud-node-bpm2g.mongodb.net/test?retryWrites=true&w=majority";

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

/** 
https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-1-3-6c8389d7147d

https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-2-3-220a127d586f

https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-3-3-b243d14a403c 

*/