const LearnCD = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgCD.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
    </section>

export default LearnCD