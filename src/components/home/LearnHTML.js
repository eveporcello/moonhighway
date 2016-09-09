const LearnHTML = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgHTML.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
    </section>

export default LearnHTML