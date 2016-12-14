import React from 'react'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { HomePage } from './components/home'
import { Whoops404 } from './components/ui'

const routes = (
    <Router history={browserHistory}>
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
    </Router>
)

export default routes
