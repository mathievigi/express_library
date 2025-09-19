
const errorBuilder = require("../errors/errorBuilder")
const repository = require("../repositories/author.repository")
const {models} = require("../models")

const findAll = async () => {
    return await repository.findAll()
}

const findById = async (id) => {
    return await repository.findById(id)
}

const create = async (newAuthor) => {
    return await repository.create(newAuthor)
}

const update = async (newAuthor) => {
    let author = await service.findById(newAuthor.id)
    if(!author){
        throw errorBuilder.build(404, "author not found")
    }
    return {"firstname":"toto", "lastname":"Toto"}
}

const remove = async () => {
    console.log("author.remove")
}



module.exports = {findAll, findById, create, update, remove}