import React from 'react'
import { render } from 'react-dom'
import { HomePage } from './components/home'

window.React = React

render(
    <HomePage />,
    document.getElementById('react-container')
)