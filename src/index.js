import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { HomePage } from './components/home'
import { Whoops404 } from './components/ui'

window.React = React

render(
    <Router history={hashHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/react" component={HomePage} />
        <Route path="/node" component={HomePage} />
        <Route path="/html-css" component={HomePage} />
        <Route path="/continuous-delivery" component={HomePage} />
        <Route path="/contact" component={HomePage} />
        <Route path="*" component={Whoops404} />
    </Router>,
    document.getElementById('react-container')
)