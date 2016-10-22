let logoConfig = {
    '0%': {
        transform: 'rotate(0deg)'
    },
    '20%': {
        transform: 'rotate(-20deg)'
    },
    '40%': {
        transform: 'rotate(20deg)'
    },
    '80%': {
        transform: 'rotate(0deg)'
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