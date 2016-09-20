const Home = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgHome.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Welcome To Moon Highway</h1>
        <img src="/img/logo.png" />
        <p>Updates, Upgrades, and Patches for Your Engineers</p>
        <p>Customized software development training for engineers of all skill levels</p>
    </section>

export default Home