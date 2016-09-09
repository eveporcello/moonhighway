import { Relax } from '../relax'
import Home from './Home'
import LearnReact from './LearnReact'
import LearnNode from './LearnNode'
import LearnHTML from './LearnHTML'
import LearnCD from './LearnCD'
import Contact from './Contact'
import '../../stylesheets/Home.scss'

export const HomePage = () =>
    <Relax>
        <Home />
        <LearnReact />
        <LearnNode />
        <LearnHTML />
        <LearnCD />
        <Contact />
    </Relax>