const app = require('./config');
const book = require("./book");
const actions = require("./actions");    // API actions

// Initiate book array
books = [];
books.push(new book("LOGICA DE PROGRAMAÇAO - APRENDENDO A PROGRAMAR", "RUBENS CAMPOS DE ALMEIDA JUNIOR", "CIENCIA MODERNA", "Programação"));
books.push(new book("GO PROGRAMMING BLUEPRINTS", "MAT RYER", "LIGHTNING SOURCE", "Programação"));

// Iniciate API
app.get("/", function(req, res) {
    res.json({
        status: "Book API is working!"
    });
});

app.listen(3000, function() {
    console.log("Book API is working!");
});

module.exports = app;