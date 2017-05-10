import { delaySlideScreenUp, logoOut, collapseBox, screenLayout } from '../../lib'
import { ResponsiveImg } from '../ui'
import { Link } from 'react-router'

const Home = ({index, screenScale, screenHeight}) =>
    <section className="slide home"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
        <ResponsiveImg portrait="/img/titles/logo.png"
                       landscape="/img/titles/logo-long.png"
            {...screenScale(logoOut[screenLayout()])} />
        <div className="box" {...screenScale(collapseBox[screenLayout()])}>
            <h1>Updates, Upgrades, and Patches for Your Engineers</h1>
            <p>Customized software development training for engineers of all skill levels 
                <Link to="/info/about">More about Moon Highway &gt;</Link>
            </p>
        </div>
    </section>

export default Home
