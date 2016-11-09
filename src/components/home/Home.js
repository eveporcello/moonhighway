import { delaySlideScreenUp, logoOut, collapseBox } from '../../lib'

const screenLayout = () =>
    (window.innerWidth >= window.innerHeight) ?
        "landscape" : "portrait"

const ResponsiveImg = (props) =>
    <img src={(screenLayout() === "portrait") ? props.portrait : props.landscape}
         {...props} />

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