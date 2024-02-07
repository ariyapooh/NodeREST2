const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

const db = new sqlite3.Database('./Database/Book.sqlite');

app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQBooks.sqlite'
});

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


sequelize.sync();

app.get('/books', (req, res) => {
    db.all('SELECT * FROM books', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.json(rows);
        }
    });
});


app.get('/books/:id', (req, res) => {
    db.get('SELECT * FROM books WHERE id = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            if (!row) {
                res.status(404).send('Book not found');
            }
            else {
                res.json(row);
            }
        }
    });
});

app.post('/books', (req, res) => {
    const book = req.body;
    db.run('INSERT INTO books(title,author)VALUES(?,?)', book.title, book.author, function (err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            book.id = this.lastID;
            res.send(book);
        }
    });
});

app.put('/books/:id', (req, res) => {
    db.all('SELECT id FROM books',(err,rows) => {
        let checkid = rows.map((row) => {
            if(row.id === parseInt(req.params.id)){
                return true;
            }
            else{
                return false;
            }
        })
        if(checkid.includes(true)){
            const book = req.body;
            db.run('UPDATE books SET title = ? , author = ? WHERE id = ?', book.title, book.author, req.params.id, function (err) {
                if (err) {
                    res.status(500).send(err);
                    }
                else {
                res.send(book);
            }
            });
        }
        else {
            res.status(502).json('not found');
        }
    });
    
});

app.delete('/books/:id', (req, res) => {
    db.all('SELECT id FROM books',(err,rows) => {
        let checkid = rows.map((row) => {
            if(row.id === parseInt(req.params.id)){
                return true;
            }
            else{
                return false;
            }
        });
        if(checkid.includes(true)){
             db.run('DELETE FROM books WHERE id = ?', req.params.id, function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({});
                }
                });
        }
        else{
            res.status(502).json('not found');
        }
    });
});
const port = process.env.PORT  || 3000;
app.listen(port , () => console.log(`Listening on port ${port}...`));