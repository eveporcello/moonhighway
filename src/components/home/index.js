import { Rellax } from '../relax'
import Home from './Home'
import LearnReact from './LearnReact'
import LearnNode from './LearnNode'
import LearnHTML from './LearnHTML'
import LearnCD from './LearnCD'
import Contact from './Contact'
import { SocialIcons } from '../ui'
import '../../stylesheets/Home.scss'

export const HomePage = () =>
    <div className="home-page">
        <Rellax>
            <Home />
            <LearnReact />
            <LearnNode />
            <LearnHTML />
            <LearnCD />
            <Contact />
        </Rellax>
        <SocialIcons ignoreRellax={true}/>
    </div>
