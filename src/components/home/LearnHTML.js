const LearnHTML = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgHTML.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn HTML</h1>
    </section>

export default LearnHTML