import { Component } from 'react'
import { Link } from 'react-router'
import { SocialIcons } from '../ui'

export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: window.innerWidth < 750
        }
        this.onResize = this.onResize.bind(this)
    }

    onResize() {
        if (this.state.collapsed && window.innerWidth > this.props.breakpoint) {
            this.setState({ collapsed: false })
        } else if (!this.state.collapsed && window.innerWidth < this.props.breakpoint) {
            this.setState({ collapsed: true })
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        const activeStyle = {
            borderRightColor: '#b3b6b8',
            color: '#b3b6b8'
        }
        return (this.state.collapsed) ?
            <h1>Collapsed Menu</h1> :
            <nav className="main-menu">
                <h2>Main Menu</h2>
                <Link activeStyle={activeStyle} to="/info/about">About Moon Highway</Link>
                <Link activeStyle={activeStyle} to="/info/react-training">React Training</Link>
                <Link activeStyle={activeStyle} to="/info/node-training">Node Training</Link>
                <Link activeStyle={activeStyle} to="/info/html-css-training">HTML &amp; CSS Training</Link>
                <Link activeStyle={activeStyle} to="/info/continuous-delivery-training">Continuous Delivery Training</Link>
                <Link activeStyle={activeStyle} to="/contact">Contact Us</Link>
            </nav>
    }
}

Menu.defaultProps = {
    breakpoint: 933
}
