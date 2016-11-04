import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'

const target = document.getElementById('react-container')

window.React = React


preload([
    '/img/bgCD.png',
    '/img/bgContact.png',
    '/img/bgHome.png',
    '/img/bgHTML.png',
    '/img/bgNode.png',
    '/img/bgReact.png',
    '/img/cd.png',
    '/img/html.png',
    '/img/logo.png',
    '/img/node.png',
    '/img/react.png'
]).then(() => {
    target.className = 'fadeIn'
    render(routes, target)
})