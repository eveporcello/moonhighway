const Home = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                backgroundImage: `url(/img/bgHome.png)`,
                zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Moon Highway</h1>
        <div className="content">
            <p>Upgrading Engineers</p>
        </div>
    </section>

export default Home