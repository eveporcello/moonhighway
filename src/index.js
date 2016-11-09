import C from './config.json'
import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'

//
//  TODO: Preload Backgrounds and Titles based upon screen size
//

const backgrounds = C.preload.backgrounds.map(b => '/img/lg/landscape/' + b)
const titles = C.preload.titles.map(t => '/img/titles/')

window.React = React

//preload([...backgrounds, ...titles]).then(() => {
    render(routes, document.getElementById('react-container'))
//})

//
//  TODO: Remove this debug info
//

let ratio = require('aspect-ratio')

if (/debug/.test(location)) {
    let info = document.createElement('div')
    info.style.position = 'fixed'
    info.style.zIndex = '5000'
    info.style.top = 0
    info.style.left = 0
    info.style.padding = '.2em'
    info.style.fontFamily = 'verdana'
    info.style.fontSize = '.8em'
    info.style.backgroundColor = '#EEE'
    info.innerHTML = window.innerWidth + "x" + window.innerHeight
    document.body.appendChild(info)
    window.addEventListener('resize', () =>
        info.innerHTML = window.innerWidth + "x" + window.innerHeight
    )

    let aspect = document.createElement('div')
    aspect.style.position = 'fixed'
    aspect.style.zIndex = '5000'
    aspect.style.bottom = 0
    aspect.style.left = 0
    aspect.style.padding = '.2em'
    aspect.style.fontFamily = 'verdana'
    aspect.style.fontSize = '.8em'
    aspect.style.backgroundColor = '#EEE'
    console.log('ratio', ratio(window.innerWidth,window.innerHeight))
    aspect.innerHTML = ratio(window.innerWidth,window.innerHeight)
    document.body.appendChild(aspect)
    window.addEventListener('resize', () =>
        aspect.innerHTML = ratio(window.innerWidth,window.innerHeight)
    )
}