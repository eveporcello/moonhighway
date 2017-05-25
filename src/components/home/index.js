import { Component } from 'react'
import { Rellax } from '../relax'
import Home from './Home'
import LearnReact from './LearnReact'
import LearnNode from './LearnNode'
import LearnHTML from './LearnHTML'
import LearnCD from './LearnCD'
import Contact from './Contact'
import { SocialIcons } from '../ui'
import '../../stylesheets/page.scss'
import '../../stylesheets/home.scss'

export class HomePage extends Component {

    componentDidMount() {
        document.getElementById('react-container').className = 'fadeIn'
    }

    render() {
        const { location } = this.props
        return (
            <div className="home-page">
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    padding: '1em',
                    color: 'black',
                    backgroundColor: 'white',
                    zIndex: 999999
                }}>
                {window.innerWidth} x {window.innerHeight}
              </div>
                <Rellax location={location}>
                    <Home route="/" />
                    <LearnReact route="/react" />
                    <LearnNode route="/node" />
                    <LearnHTML route="/html-css" />
                    <LearnCD route="/continuous-delivery" />
                    <Contact route="/contact" />
                </Rellax>
                <SocialIcons ignoreRellax={true} hide={location.pathname === '/contact'} />
            </div>
        )
    }
}
