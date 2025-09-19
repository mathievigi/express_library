const { models } = require("../models");
const author = models.author
const book = models.book

const includedBook = { model: book, as: 'books' }

const findAll = () => {
    return author.findAll({include: includedBook});
};

const findById = (id) => {
    return author.findByPk(id, {include: includedBook})
}

const create = async (newAuthor) => {
    return author.create(newAuthor, {include: includedBook})
}

module.exports = { findAll, findById, create };
