const Author = require('../Schema/authorSchema');


const authorCreate = async (inputs) => {
    const author = new Author(inputs);
    try{
        const result = await author.save();
        return authorGet(result._id);
    } catch (err){
        console.log(err)
    }
};

const authorList = async (page, page_size) => {
    try{
        const result = await Author.find({}, {},{ skip: parseInt(page_size) * (page-1), limit: parseInt(page_size) });
        return result;
    } catch (err){
        console.log(err)
    }
};

const authorGet = async (auther_id) => {

    try{
        const result = await Author.findById(auther_id);
        return result;
    } catch (err){
        console.log(err)
    }
};

const authorUpdate = async (inputs) => {

    try {
        const oldAuthor = await Author.findByIdAndUpdate(inputs.auther_id, {firstName: inputs.firstName, lastName: inputs.lastName});
        const newAuthor = authorGet(inputs.auther_id);
        return newAuthor;
    } catch (err){
        console.log(err)
    }
};



module.exports = {
    authorCreate,
    authorList,
    authorGet,
    authorUpdate,
}