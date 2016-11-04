import C from './config.json'
import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'

const target = document.getElementById('react-container')

window.React = React

preload(C.preload.images).then(() => {
    target.className = 'fadeIn'
    render(routes, target)
})