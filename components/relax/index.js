import { Component, Children, cloneElement } from 'react'
import skrollr from 'skrollr'
import '!style!css!sass!postcss-loader!../../stylesheets/relax.scss'

export const convertToScrollPosition = (percentage, scrollRange) => {
    const range = scrollRange[1] - scrollRange[0]
    const point = percentage*range
    return point + scrollRange[0]
}

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
        const scrollRange = [screen.height*index, screen.height*(index+1)]

        let relaxConfig = {
            'data-0': 'top: 0px'
        }

        if (index === 0) {
            relaxConfig[`data-${screen.height}`] = `top: -${screen.height}px`
        } else  {
            if (index !== (length - 1)) {
                relaxConfig[`data-${scrollRange[0]}`] = `top: 0px`
                relaxConfig[`data-${scrollRange[1]}`] = `top: -${screen.height}px`
            }
        }

        return cloneElement(el, {relaxConfig, index, scrollRange})
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

    componentDidUpdate() {
        window.skr.refresh()
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