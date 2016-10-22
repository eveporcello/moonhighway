let logoConfig = {
    '0%': {
        transform: 'rotate(0deg)',
        top: '0%',
        width: '80%'
    },
    '20%': {
        transform: 'rotate(-20deg)',
        top: '90%'
    },
    '40%': {
        transform: 'rotate(20deg)',
        width: '100%',
        top: '90%'
    },
    '80%': {
        transform: 'rotate(0deg)',
        width: '10%'
    }
}

const Home = ({index, screenConfig, screenScale}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgHome.png)`,
                 zIndex: 1000-index
             }}
             {...screenConfig}>
        <h1>Welcome To Moon Highway</h1>
        <img src="/img/logo.png" {...screenScale(logoConfig)} />
        <p>Updates, Upgrades, and Patches for Your Engineers</p>
        <p>Customized software development training for engineers of all skill levels</p>
    </section>

export default Home