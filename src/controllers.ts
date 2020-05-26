import dz = require("dz-communes")
import { Request, Response } from "express"

const { wilayas, communes, wilayas_communes } = dz

interface ICommune {
  postalcode: string
  name: string
  wilayacode: string
}

const getWilayas = (req: Request, res: Response) =>  res.send(wilayas)
const getWilaya = (req: Request, res: Response) =>  {
  const { code } = req.params;
  ( (parseInt(code) > 0) && (parseInt(code) < 49) ) ? res.send(wilayas[(parseInt(code) - 1)]) : res.status(404).send({ message: 'Not found' })
}

const getCommunes = (req: Request, res: Response) =>  res.send(communes)
const getCommune = (req: Request, res: Response) =>  {
  const { code } = req.params;
  ( (parseInt(code) > 0) && (parseInt(code) < 49) ) ? res.send(communes.filter((c: ICommune) => parseInt(c.wilayacode) === parseInt(code))) : res.status(404).send({ message: 'Not found' })
}

const getAll = (req: Request, res: Response) => res.send(wilayas_communes)
const getOne = (req: Request, res: Response) => {
  const { code } = req.params;
  ( (parseInt(code) > 0) && (parseInt(code) < 49) ) ? res.send(wilayas_communes[(parseInt(code) - 1)]) : res.status(404).send({ message: 'Not found' })
}

export { getWilayas, getWilaya, getCommunes, getCommune, getAll, getOne }