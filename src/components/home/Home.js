const Home = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgHome.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Welcome To Moon Highway</h1>
    </section>

export default Home