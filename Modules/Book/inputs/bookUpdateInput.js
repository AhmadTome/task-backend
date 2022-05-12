class bookUpdateInput {
    constructor(inputs) {
        this.name = inputs.name;
        this.isbn = inputs.isbn;
        this.author_id = inputs.author_id;
        this.book_id = inputs.book_id;
    }
}

module.exports = {bookUpdateInput}