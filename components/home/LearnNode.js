const LearnNode = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
    </section>

export default LearnNode