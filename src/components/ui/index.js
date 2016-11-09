import { PropTypes, Component } from 'react'
import MdEject from 'react-icons/lib/md/eject'
import GithubIcon from 'react-icons/lib/go/mark-github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import DownTriangle from 'react-icons/lib/go/triangle-down'
import Box from 'react-icons/lib/md/check-box-outline-blank'
import Check from 'react-icons/lib/md/check-box'
import { screenLayout } from '../../lib'

import '../../stylesheets/ui.scss'

export const DownButton = ({onClick=f=>f}) =>
    <div className="down-button" onClick={onClick}>
        <div></div>
        <MdEject />
    </div>

DownButton.propTypes = {
    onClick: PropTypes.func
}

export const ResponsiveImg = (props) =>
    <img src={(screenLayout() === "portrait") ? props.portrait : props.landscape}
        {...props} />

ResponsiveImg.propTypes = {
    portrait: PropTypes.string.isRequired,
    landscape: PropTypes.string.isRequired
}

export const SocialIcons = () =>
    <div className="social-icons">
        <a href="https://www.facebook.com/MoonHighway" target="_blank">
            <FacebookIcon />
        </a>
        <a href="https://twitter.com/MoonHighway" target="_blank">
            <TwitterIcon />
        </a>
        <a href="https://github.com/MoonHighway" target="_blank">
            <GithubIcon />
        </a>
    </div>

export const Whoops404 = () =>
    <div className="whoops-404">
        <h1>Whoops 404</h1>
    </div>

export const SelectCheck = ({selected=false, select=f=>f, deselect=f=>f, children}) =>
    <div className="select-check" onClick={(selected) ? deselect : select}>
        {(selected) ? <Check /> : <Box />}
        <span className={(selected) ? "selected" : ""}>
            {children}
        </span>
    </div>

export class ExpandableSelectList extends Component {

    get value() {
        return this.state.selectedOptions.join(',')
    }

    set value(val) {
        if (Array.isArray(val)) {
            const selectedOptions = val.split(',')
            this.setState({selectedOptions})
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            selectedOptions: []
        }
        this.toggle = this.toggle.bind(this)
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }
    toggle() {
        const expanded = !this.state.expanded
        this.setState({expanded})
    }
    add(option) {
        if (!this.state.selectedOptions.some(sel => sel === option)) {
            const selectedOptions = [
                ...this.state.selectedOptions,
                option
            ]
            this.setState({selectedOptions})
        }
    }
    remove(option) {
        const selectedOptions = this.state.selectedOptions.filter(opt => opt !== option)
        this.setState({selectedOptions})
    }
    render() {
        const { children, options } = this.props
        const { expanded } = this.state
        return (
            <div className="expandable-select-list">
                <button type="button"
                        onClick={this.toggle}>{children} | <DownTriangle /></button>
                {(expanded) ?
                    <div className="options">
                        {options.map((opt, i) =>
                            <SelectCheck key={i}
                                         selected={this.state.selectedOptions.some(sel=>opt===sel)}
                                         select={() => this.add(opt)}
                                         deselect={() => this.remove(opt)}>
                                {opt}
                            </SelectCheck>
                        )}
                    </div> : null
                }
            </div>
        )
    }
}

ExpandableSelectList.defaultProps = {
    options: []
}

ExpandableSelectList.propTypes = {
    options: PropTypes.array
}