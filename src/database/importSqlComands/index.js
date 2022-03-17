const create = require('../sql/create')
const select = require('../sql/select')
const update = require('../sql/update')
const deleta = require('../sql/delete')
const oneContact = require('../sql/oneGetContact')
const retornaOptions = require('../sql/getNomeAndNumero')

module.exports = { create, select, update, deleta, oneContact, retornaOptions }