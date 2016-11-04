import { Component } from 'react'
import { Rellax } from '../relax'
import Home from './Home'
import LearnReact from './LearnReact'
import LearnNode from './LearnNode'
import LearnHTML from './LearnHTML'
import LearnCD from './LearnCD'
import Contact from './Contact'
import { SocialIcons } from '../ui'
import '../../stylesheets/Home.scss'

export class HomePage extends Component {

    componentDidMount() {
        document.getElementById('react-container').className = 'fadeIn'
    }

    render() {
        const { location } = this.props
        return (
            <div className="home-page">
                <Rellax location={location}>
                    <Home route="/" />
                    <LearnReact route="/react" />
                    <LearnNode route="/node" />
                    <LearnHTML route="/html-css" />
                    <LearnCD route="/continuous-delivery" />
                    <Contact route="/contact" />
                </Rellax>
                <SocialIcons ignoreRellax={true}/>
            </div>
        )
    }
}
