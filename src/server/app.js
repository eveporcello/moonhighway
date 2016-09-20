import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import {
    success, notFound, error, fileAssets, icon
} from './lib'

export default express()
    .use(icon)
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())
    .use(fileAssets)
    .get('/', success)
    .use(notFound)
    .use(error)
