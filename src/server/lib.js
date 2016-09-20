import express from 'express'
import favicon from 'serve-favicon'
import fs from 'fs'

const htmlIndex = fs.readFileSync('build/client/index.html')

export const icon = favicon('build/client/favicon.ico')

export const fileAssets = express.static('build/client')

export const success = (req, res) =>
    res.status(200).send(htmlIndex)

export const notFound = (req, res, next) => {
    let err = new Error('Content Not Found')
    err.status = 404
    next(err)
}

export const error = (error, req, res, next) =>
    res.status(error.status || 500).json(error)
