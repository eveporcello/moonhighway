const LearnNode = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn Node</h1>
    </section>

export default LearnNode