import { Component } from 'react'
import skrollr from 'skrollr'

//
// TODO: Maybe add as inline styles when this component renders
//

import '!style!css!sass!postcss-loader!../../stylesheets/relax.scss'

export class Relax extends Component {
    componentDidMount() {
        window.skr = skrollr.init({ edgeStrategy: 'set' })
    }
    render() {
        const { children } = this.props
        return (
            <div className="relax-root">
                {children}
            </div>
        )
    }
}