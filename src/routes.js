import React from 'react'
import { Router, Route, Redirect, browserHistory, hashHistory } from 'react-router'
import { HomePage } from './components/home'
import { Whoops404 } from './components/ui'
import InternalPage from './components/page/InternalPage'
import ReactGA from 'react-ga'

export const isProduction = (fTrue, fFalse) =>
    (window.location.origin.match(/moonhighway.com/) && process.env.NODE_ENV === 'production' && !window.autoplaying) ?
        (typeof fTrue === 'function') ? fTrue() : fTrue
        : (typeof fFalse === 'function') ? fFalse() : fFalse

export const isDevServer = (fTrue, fFalse) =>
    (process.env.NODE_ENV === 'development' && window.location.origin.match(/http:\/\/localhost:3333/)) ?
        (typeof fTrue === 'function') ? fTrue() : fTrue
        : (typeof fFalse === 'function') ? fFalse() : fFalse

isProduction(() => ReactGA.initialize('UA-40790507-1'))

const routes = (
    <Router history={isDevServer(hashHistory, browserHistory)} onUpdate={() => {
        isDevServer(() => console.warn('using hashHistory for development'))
        isProduction(() => {
            ReactGA.set({ page: window.location.pathname })
            ReactGA.pageview(window.location.pathname)
        })
    }}>
        <Route path="/" component={HomePage}/>
        <Route path="/react" component={HomePage}/>
        <Route path="/node" component={HomePage}/>
        <Route path="/html-css" component={HomePage}/>
        <Route path="/continuous-delivery" component={HomePage}/>
        <Route path="/contact" component={HomePage}/>
        <Route path="/info/:article" component={InternalPage} />
        <Route path="*" component={Whoops404}/>
    </Router>
)

export default routes
