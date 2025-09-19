const service = require("../services/author.service")

const findAll = async (req, res) => {
    let authors =  await service.findAll()
    res.json(authors)
}

const create = async (req, res) => {
    let author = await service.create(req.body)
    res.json(author)
}


const findById = async (req, res) => {
    let author = await service.findById(parseInt(req.params.id))
    res.json(author)
}


const update = async (req, res) => {
    newAuthor = req.body
   
    author = await service.update()
    res.json()
}

const remove = async (req, res) => {
    await service.remove()
    res.status(201);
    res.send("ok")
}

module.exports = {findAll, create, findById, update, remove}