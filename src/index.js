import C from './config.json'
import React from 'react'
import { render } from 'react-dom'
import { preload } from 'pic-loader'
import routes from './routes'
import { screenSize, screenLayout } from './lib'

// Redirect www's to secure url
if (window.location.href.match(/http:\/\/www.moonhighway.com/)) {
  window.location = 'https://www.moonhighway.com'
}

const backgrounds = C.preload.backgrounds.map(img => `/img/bg/${screenSize()}/${screenLayout()}/${img}`)
const titles = C.preload.titles.map(t => '/img/titles/' + t)

window.React = React

preload([...backgrounds, ...titles]).then(() => {
    setTimeout(() => render(routes, document.getElementById('react-container')), 200)
})
