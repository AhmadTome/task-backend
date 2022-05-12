class bookCreateInput {

    constructor(inputs) {
        this.name = inputs.name;
        this.isbn = inputs.isbn;
        this.author_id = inputs.author_id;
    }
}

module.exports = {bookCreateInput}