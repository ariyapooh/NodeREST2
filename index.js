const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
    "mongodb://admin:ATRisc16116@node58398-env-4744631.proen.app.ruk-com.cloud:11846",
    {
        useNewUrlPArser: true,
        useUnifiedTopology: true,
    }
);
// const dbUrl = 'postgress://webadmin:GLMebl11497@node58397-env-4744631.proen.app.ruk-com.cloud/Books'

// const sequelize = new Sequelize(dbUrl);

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'sqlite',
//     storage: './Database/SQBooks.sqlite'
// });

const Book = mongoose.model("Book", {
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    title: String,
    author: String,
    });
    
const app = express();
app.use(bodyParser.json());


app.post('/books',  async (req, res) => {
    try {
        const lastBook = await Book.findOne().sort({ id: -1});
        const nextId = lastBook ? lastBook.id + 1 : 1;

        const book = new Book({
            id: nextId,
            ...req.body,
        });

        await book.save();
        res.send(book);
    } catch (error) {
        res.status(500).send(error) ;       
    }
});

app.get("/books", async (req, res) => {
    try{
        const books = await Book.find();
        res.send(books);
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/books/:id", async (req, res) => {
    try{
        const book = await Book.findOne({id:req.params.id});
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

app.put('/books/:id', async (req, res) => {
    try{
        const book = await Book.findOneAndUpdate({id:req.params.id}, req.body, {
            new: true,
        });
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

app.delete('/books/:id', async (req, res) => {
    try{
        const book = await Book.findOneAndDelete({id:req.params.id});
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
