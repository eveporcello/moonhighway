import GithubIcon from 'react-icons/lib/go/mark-github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'

//
//Removed Sample App But here is the code
//
//let logoConfig = {
//    '0%': {
//        transform: 'rotate(0deg)',
//        top: '0%',
//        width: '80%'
//    },
//    '20%': {
//        transform: 'rotate(-20deg)',
//        top: '90%'
//    },
//    '40%': {
//        transform: 'rotate(20deg)',
//        width: '100%',
//        top: '90%'
//    },
//    '80%': {
//        transform: 'rotate(0deg)',
//        width: '10%'
//    }
//}
//
//  {...screenScale(logoConfig)}

const Home = ({index, screenConfig, screenScale}) =>
    <section className="slide home"
             style={{
                 backgroundImage: `url(/img/bgHome.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>

        <img src="/img/logo.png"/>

        <div className="box">
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
