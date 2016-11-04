import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { HomePage } from './components/home'
import { Whoops404 } from './components/ui'
import { preload } from 'pic-loader'

const removeOverlay = () => {
    const overlay = document.getElementById("loading-overlay")
    overlay.parentNode.removeChild(overlay)
}

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
]).then(removeOverlay)


render(
    <Router history={hashHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/react" component={HomePage}/>
        <Route path="/node" component={HomePage}/>
        <Route path="/html-css" component={HomePage}/>
        <Route path="/continuous-delivery" component={HomePage}/>
        <Route path="/contact" component={HomePage}/>
        <Redirect from="/h5o-1" to="/"/>
        <Redirect from="/h5o-2" to="/"/>
        <Redirect from="/h5o-3" to="/react"/>
        <Redirect from="/h5o-4" to="/node"/>
        <Redirect from="/h5o-5" to="/html-css"/>
        <Redirect from="/h5o-6" to="/continuous-delivery"/>
        <Redirect from="/h5o-7" to="/contact"/>
        <Route path="*" component={Whoops404}/>
    </Router>,
    document.getElementById('react-container')
)