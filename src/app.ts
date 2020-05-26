import express = require("express")
import favicon = require('serve-favicon')
import path = require('path')
import { Request, Response, NextFunction } from 'express'
import compression = require('compression')
import cors = require('cors')

const app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use('*', cors())
app.use(compression())
app.use(express.json())

import dzRoutes from './routes'
app.use('/api', dzRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found')
    next(error)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
        .json({ message: err.message, method: err.method, url: err.url })
})

export default app;