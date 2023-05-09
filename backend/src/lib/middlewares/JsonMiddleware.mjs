import express from "express"

const jsonMiddleware = express.json({limit: '50mb'})

export default jsonMiddleware