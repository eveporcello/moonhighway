import { Component, Children, cloneElement } from 'react'
import skrollr from 'skrollr'
import Hammer from 'hammerjs'
import { DownButton } from '../ui'
import { StackCycle } from '../../lib'
import '!style!css!sass!postcss-loader!../../stylesheets/relax.scss'

const duration = 500

export const convertToScrollPosition = (percentage, scrollRange) => {
    const range = scrollRange[1] - scrollRange[0]
    const point = percentage * range
    return point + scrollRange[0]
}

export class Relax extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: {
                height: window.innerHeight,
                width: window.innerWidth
            },
            current: {
                screenIndex: 0,
                breakpoint: 0
            }
        }
        this.scrollScreen = this.scrollScreen.bind(this)
        this.nextScreen = this.nextScreen.bind(this)
        this.prevScreen = this.prevScreen.bind(this)
        this.getBreakpoints = this.getBreakpoints.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    scrollScreen(el, index) {
        const { screen } = this.state
        const { length } = this.props.children
        const scrollRange = [screen.height * index, screen.height * (index + 1)]

        let relaxConfig = {
            'data-0': 'top: 0px'
        }

        if (index === 0) {
            relaxConfig[`data-${screen.height}`] = `top: -${screen.height}px`
        } else {
            if (index !== (length - 1)) {
                relaxConfig[`data-${scrollRange[0]}`] = `top: 0px`
                relaxConfig[`data-${scrollRange[1]}`] = `top: -${screen.height}px`
            }
        }

        return cloneElement(el, {relaxConfig, index, scrollRange})
    }

    getBreakpoints() {
        const { children } = this.props
        const { screen } = this.state
        return Children.map(children, (child, i) => i * screen.height)
    }

    nextScreen() {
        const current = {
            breakpoint: this.screenCycle.next(),
            screenIndex: this.screenCycle.currentIndex(),
            transitioning: true
        }
        this.setState({current})
        setTimeout(() => this.skr.animateTo(current.breakpoint, {
            duration,
            easing: 'swing',
            done: () => this.setState({
                current: {
                    ...current,
                    transitioning: false
                }
            })
        }))
    }

    prevScreen() {
        const current = {
            breakpoint: this.screenCycle.prev(),
            screenIndex: this.screenCycle.currentIndex()
        }
        this.setState({current})
        setTimeout(() => this.skr.animateTo(current.breakpoint, {
            duration,
            easing: 'swing',
            done: () => this.setState({
                current: {
                    ...current,
                    transitioning: false
                }
            })
        }))
    }

    onResize() {
        let screen = {
                height: window.innerHeight,
                width: window.innerWidth
            },
            breakpoints = this.getBreakpoints();
        this.screenCycle = new StackCycle(breakpoints, this.state.current.screenIndex)
        const current = {
            ...this.state.current,
            breakpoint: this.screenCycle.current()
        }
        this.setState({screen, breakpoints, current})

    }

    componentWillMount() {
        const breakpoints = this.getBreakpoints()
        this.setState({breakpoints})
        this.screenCycle = new StackCycle(breakpoints, 0)
        window.addEventListener('resize', this.onResize)
    }

    componentDidMount() {
        const direction = Hammer.DIRECTION_VERTICAL
        this.skr = skrollr.init({edgeStrategy: 'set'})
        this.mc = new Hammer(this.refs.root)
        this.mc.get('pan').set({direction});
        this.mc.on("panend", e =>
            (e.additionalEvent === 'pandown') ?
                this.prevScreen() :
                this.nextScreen()
        )
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    componentDidUpdate() {
        this.skr.refresh()
    }

    render() {
        const { children } = this.props
        const { screenIndex } = this.state.current
        return (
            <div ref="root" className="relax-root">
                {(children.length !== screenIndex + 1) ?
                    <DownButton onClick={this.nextScreen}/> :
                    null
                }
                {Children.map(children, this.scrollScreen)}
            </div>
        )
    }

}