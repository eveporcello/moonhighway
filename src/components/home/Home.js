import { delaySlideScreenUp, logoOut, collapseBox } from '../../lib'
import GithubIcon from 'react-icons/lib/go/mark-github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'

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

            <div>
                <div className="icons">
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
            </div>

        </section>

export default Home
