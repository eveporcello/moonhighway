import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import '!style!css!sass!postcss-loader!./stylesheets/App.scss'

window.React = React;

render(<App />, document.getElementById('react-container'));