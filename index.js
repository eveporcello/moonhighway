import React from 'react'
import {render} from 'react-dom'
import {HomeDeck} from './components/UI'
import '!style!css!sass!postcss-loader!./stylesheets/App.scss'

window.React = React

render(
    <HomeDeck />,
    document.getElementById('react-container')
)