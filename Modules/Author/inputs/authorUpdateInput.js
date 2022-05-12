class authorUpdateInput {
    constructor(inputs) {
        this.firstName = inputs.firstName;
        this.lastName = inputs.lastName;
        this.auther_id = inputs.auther_id;
    }
}

module.exports = {authorUpdateInput}