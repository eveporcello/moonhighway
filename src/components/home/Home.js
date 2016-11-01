import GithubIcon from 'react-icons/lib/go/mark-github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'

let stayInPlace = {
    '0%': {
        top: '7%'
    },
    '100%': {
        top: '107%'
    }
}

let collapseWhen = {
    '2.5%': {
        'left': '5%',
        'height': '140px',
        'top': '45%'
    },
    '50%': {
        'left': '5%',
        'height': '0',
        'top': '95%'
    },
    '60%': {
        'left': '105%'
    }

}

const Home = ({index, screenConfig, screenScale, fullScale}) =>
    <section className="slide home"
             style={{
                 backgroundImage: `url(/img/bgHome.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>

        <img src="/img/logo.png" {...screenScale(stayInPlace)} />

        <div className="box" {...screenScale(collapseWhen)}>
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
