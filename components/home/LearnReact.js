const LearnReact = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgReact.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
    </section>

export default LearnReact