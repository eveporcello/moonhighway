import { delaySlideScreenUp, logoOut, collapseBox } from '../../lib'

const screenLayout = () =>
    (window.innerWidth >= window.innerHeight) ?
        "landscape" : "portrait"

const ResponsiveImg = (props) =>
    <img src={(screenLayout() === "portrait") ? props.portrait : props.landscape}
         {...props} />

const Home = ({index, screenScale, screenHeight}) =>
    <section className="slide home"
             style={{
                 backgroundImage: `url(/img/bgHome.png)`,
                 zIndex: 1000-index
             }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
        <ResponsiveImg portrait="/img/logo.png"
                       landscape="/img/logo-long.png"
                       {...screenScale(logoOut[screenLayout()])} />
        <div className="box" {...screenScale(collapseBox)}>
            <h1>Updates, Upgrades, and Patches for Your Engineers</h1>
            <p>Customized software development training for engineers of all skill levels</p>
        </div>
    </section>

export default Home


// <img src="/img/logo.png" {...screenScale(logoOut)}/>