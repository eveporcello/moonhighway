import React from 'react'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { HomePage } from './components/home'
import { Whoops404 } from './components/ui'
import InternalPage from './components/page/InternalPage'
import ReactGA from 'react-ga'

if (window.location.origin.match(/moonhighway.com/)) {
    ReactGA.initialize('UA-40790507-1')
}

const routes = (
    <Router history={browserHistory} onUpdate={() => {
        if (window.location.origin.match(/moonhighway.com/)) {
            ReactGA.set({ page: window.location.pathname })
            ReactGA.pageview(window.location.pathname)
        }
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
