import { delaySlideScreenUp, logoOut, collapseBox } from '../../lib'

const Home = ({index, screenScale, screenHeight}) =>
    <section className="slide home"
             style={{
                     backgroundImage: `url(/img/bgHome.png)`,
                     zIndex: 1000-index
                 }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>

        <img src="/img/logo.png" {...screenScale(logoOut)}/>
        <div className="box" {...screenScale(collapseBox)}>
            <h1>Updates, Upgrades, and Patches for Your Engineers</h1>
            <p>Customized software development training for engineers of all skill levels</p>
        </div>
    </section>

export default Home
