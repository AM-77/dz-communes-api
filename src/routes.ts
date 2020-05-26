import express = require("express")
const dzRouter = express.Router()
import { getWilayas, getWilaya, getCommunes, getCommune, getAll, getOne } from './controllers'

dzRouter.get("/w", getWilayas)
dzRouter.get("/w/:code", getWilaya)

dzRouter.get("/c", getCommunes)
dzRouter.get("/c/:code", getCommune)

dzRouter.get("/all", getAll)
dzRouter.get("/all/:code", getOne)

export default dzRouter