class Book {

    constructor(title, author, editor, subject) {
        this.title = title;
        this.author = author;
        this.editor = editor;
        this.subject = subject;
        this.dataCadastro = new Date();
    }
 
}

module.exports = Book; 

