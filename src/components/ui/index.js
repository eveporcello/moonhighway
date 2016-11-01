import { PropTypes } from 'react'
import MdEject from 'react-icons/lib/md/eject'
import GithubIcon from 'react-icons/lib/go/mark-github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import '../../stylesheets/ui.scss'

export const DownButton = ({onClick=f=>f}) =>
    <div className="down-button" onClick={onClick}>
        <div></div>
        <MdEject />
    </div>

DownButton.propTypes = {
    onClick: PropTypes.func
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