const LearnCD = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgCD.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn Build Tools</h1>
    </section>

export default LearnCD