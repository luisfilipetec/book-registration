const app = require('./config');
const book = require("./book");

app.get("/books", function(req, res) {
    var json = [];

    for(var i = 0; i < books.length; i++){

        json_get_book = {
            title: this.books[i].title,
            author: this.books[i].author,
            editor: this.books[i].editor,
            subject: this.books[i].subject
        };

        json.push(json_get_book);
    }

    res.status(200).json(json);
});

app.post("/book", function(req, res) {

    books.push(new book(req.body.title, req.body.author, req.body.editor, req.body.subject));
    res.status(201).send("Book registered!");

});

module.exports = app;