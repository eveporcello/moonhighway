import { delaySlideScreenUp, logoOut, collapseBox, screenLayout } from '../../lib'
import { ResponsiveImg } from '../ui'

const Home = ({index, screenScale, screenHeight}) =>
    <section className="slide home"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
    </section>

export default Home


//<ResponsiveImg portrait="/img/logo.png"
//landscape="/img/logo-long.png"
//{...screenScale(logoOut[screenLayout()])} />
//<div className="box" {...screenScale(collapseBox)}>
//<h1>Updates, Upgrades, and Patches for Your Engineers</h1>
//<p>Customized software development training for engineers of all skill levels</p>
//</div>