import C from './config.json'
import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'

window.React = React

preload(C.preload.images).then(() => {
    render(routes, document.getElementById('react-container'))
})