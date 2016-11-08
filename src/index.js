import C from './config.json'
import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'

window.React = React

preload(C.preload.images).then(() => {
    render(routes, document.getElementById('react-container'))
})

//
//  TODO: Remove this debug info
//

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

    //window.addEventListener('resize', () => {
    //    info.innerHTML = window.innerWidth + "x" + window.innerHeight
    //})
}