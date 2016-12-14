import C from './config.json'
import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'
import { screenSize, screenLayout } from './lib'

const backgrounds = C.preload.backgrounds.map(img => `/img/bg/${screenSize()}/${screenLayout()}/${img}`)
const titles = C.preload.titles.map(t => '/img/titles/' + t)

window.React = React

// TODO: Test iPhone Emulators

// TODO: Test iPad Emulators

// TODO: Test Galaxy Emulator

// TODO: Create Galaxy Pad Emulator

// TODO: Test Galaxy Pad Emulator

// TODO: Test Portrait Browsers

// TODO: Test Landscape Browsers

// TODO: Incorporate Google Analytics

preload([...backgrounds, ...titles]).then(() => {
    setTimeout(() => render(routes, document.getElementById('react-container')), 200)
})
