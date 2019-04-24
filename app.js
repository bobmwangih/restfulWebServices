const express = require('express');
const chalk = require('chalk');
const mongoose= require('mongoose');   ///deals will all the database stuff
const bodyParser= require('body-parser');

const bob = express();
const port = process.env.PORT || 3000;
const nitengenezeeRoute = express.Router();
const db=mongoose.connect('mongodb://localhost/bookAPI'); //{ useNewUrlParser: true}  ///connecting to the  mongodb 
const Book= require('./models/bookModel');
const gari=require('./models/carModel');

bob.use('/',nitengenezeeRoute);  //localhost:5000/nitengenezeeRoute(/vitabu)
bob.use(bodyParser.urlencoded({extended:true}));
bob.use(bodyParser.json());

nitengenezeeRoute.route('/vitabu').post((req,res)=>{
    const book=new Book(req.body);

    console.log(book);
     return res.json(book);
  })
  
  .get((req,res)=>{  
  //const { query }=req;    ////query one item but sends empty if it doesnt match
  const query={};
  if(req.query.genre){
    query.genre=req.query.genre;
  }
  Book.find(query,(err,books)=>{
    if(err){
      return res.send(err);
    }
      return res.json(books);
  });
});

//////single book

nitengenezeeRoute.route('/vitabu/:bookId') //creates a route to vitabu
.get((req,res)=>{  
  
  Book.findById(req.params.bookId,(err,book)=>{
    if(err){
      return res.send(err);
    } 
      return res.json(book);
  });
});


nitengenezeeRoute.route('/magari').get((req,res)=>{
  gari.find((err,cars)=>{
    if(err){
      return res.send(err);
    }
    return res.json(cars);
  })
})

bob.get('/', (req, res) => {           //simple api
    res.send('grrrrrrrrr!');
});

bob.listen(port, () => {
    console.log(`on port ${chalk.yellow(port)}`);
});
