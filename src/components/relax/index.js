import { Component, Children, cloneElement } from 'react'
import skrollr from 'skrollr'
import Hammer from 'hammerjs'
import { DownButton } from '../ui'
import { StackCycle, isMobile } from '../../lib'
import { compose } from 'redux'
import '../../stylesheets/relax.scss'

/**
 * Durations for animations to other screens
 * @type {number}
 */
const duration = 1000

/**
 * How many times to multiply screen height by to get scroll height
 * @type {number}
 */
const scrollHeightSize = 2

/**
 * Calculates the default screenheight from breakpoints
 * @param breakpoints
 */
const screenHeight = breakpoints => breakpoints[1] - breakpoints[0]

/**
 * Returns a scale function that can be used to convert a string percentage
 * and current breakpoint index into a scroll pixle value.
 * @param breakpoints (array) The current screen breakpoints
 */
export const skrollScale = breakpoints => (p = '0%', currentBreakpoint = 0) => {
    p = p.replace('%', '')
    p = parseFloat(p / 100)
    let h = p * screenHeight(breakpoints)
    h = Math.round(h + breakpoints[currentBreakpoint])
    return (h <= breakpoints[breakpoints.length - 1]) ? h : breakpoints[breakpoints.length - 1]
}

export const simpleSkrollScale = max => (p = '0%') => {
    p = p.replace('%', '')
    p = parseFloat(p / 100)
    return Math.round(p * max)
}

/**
 * Converts camel case text to train case text (JS to CSS)
 * @param text
 */
const camelToTrain = text => text.replace(/([A-Z])/g, "-$1").toLowerCase()

/**
 * Converts a JavaScript style object into a CSS String
 * @param o
 */
export const jsObjToCSSString = (o = {}) =>
    Object.keys(o)
        .map(key => ({key, value: o[key]}))
        .map(({key, value}) =>
            ({
                key: camelToTrain(key),
                value
            })
        )
        .reduce((css, {key, value}) => `${css} ${key}: ${value}; `.trim(), '')

/*
 * A function that converts a JavaScript animation object into
 * Skrollr properties given specific screen breakpoings
 */
export const skrollrAttributes = (bp, index) => {

    const scale = (Array.isArray(bp)) ?
        skrollScale(bp) :
        simpleSkrollScale(bp)

    return (config = {}) =>
        Object.keys(config)
            .map(percent => ({
                key: `data-${scale(percent, index)}`,
                css: config[percent]
            }))
            .reduce((skrollProps,
                    { key, css }, i) =>
                    ({...skrollProps, [key]: jsObjToCSSString(css)}),
                {}
            )
}

/**
 * A component that wraps screens, handles navigation, handles skrollr, magic...
 */
export class Rellax extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: {
                height: window.innerHeight,
                scrollHeight: window.innerHeight*scrollHeightSize,
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
        const scrollRange = [screen.scrollHeight * index, screen.scrollHeight * (index + 1)]
        const screenHeight = screen.height
        const breakpoints = this.getBreakpoints()
        const maxHeight = breakpoints[breakpoints.length-1] + screen.scrollHeight
        const screenScale = skrollrAttributes(breakpoints, index)
        const fullScale = skrollrAttributes(maxHeight)
        return cloneElement(el, {
            index,
            scrollRange,
            screenHeight,
            breakpoints,
            screenScale,
            fullScale
        })
    }

    getBreakpoints() {
        const { children } = this.props
        const { screen } = this.state
        return Children.map(children, (child, i) => i * screen.scrollHeight)
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

        // 2 - Hammer js and Skrollr are initialized here, after DOM is setup
        //     a. The skrollr.init() causes the drag and scroll behave to work
        //     a. Once released Hammer JS gets the direction and moves the screen

        const direction = Hammer.DIRECTION_VERTICAL
        this.skr = skrollr.init({edgeStrategy: 'set'})
        if (isMobile()) {
            this.mc = new Hammer(this.refs.root)
            this.mc.get('pan').set({direction});
            this.mc.on("panend", e =>
                (e.additionalEvent === 'pandown') ?
                    this.prevScreen() :
                    this.nextScreen()
            )
        } else {
            //
            //  TODO: handle laptop/desktop scroll
            //
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    componentDidUpdate() {
        this.skr.refresh()
    }

    render() {

        // 1 - When teh DOM is Rendered the scrollr config is added via this.scrollScreen

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