import { Component, Children, cloneElement } from 'react'
import skrollr from 'skrollr'
import '!style!css!sass!postcss-loader!../../stylesheets/relax.scss'

export class Relax extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }
        this.scrollScreen = this.scrollScreen.bind(this)
    }

    scrollScreen(el, index) {
        const { screen } = this.state
        const { length } = this.props.children

        let relaxConfig = {
            'data-0': 'top: 0px'
        }

        if (index === 0) {
            relaxConfig[`data-${screen.height}`] = `top: -${screen.height}px`
        } else  {
            if (index !== (length - 1)) {
                relaxConfig[`data-${screen.height*index}`] = `top: 0px`
                relaxConfig[`data-${screen.height*(index+1)}`] = `top: -${screen.height}px`
            }
        }

        return cloneElement(el, {relaxConfig, index})
    }

    componentWillMount() {
        window.onresize = () => {
            let screen = {
                height: window.innerHeight,
                width: window.innerWidth
            }
            this.setState({screen})
        }
    }

    componentDidMount() {
        window.skr = skrollr.init({ edgeStrategy: 'set' })
    }

    componentWillUnmount() {
        window.onresize = null
    }

    render() {
        const { children } = this.props
        return (
            <div className="relax-root">
                {Children.map(children, this.scrollScreen)}
            </div>
        )
    }

}