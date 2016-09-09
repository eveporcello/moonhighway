const LearnReact = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgReact.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn React</h1>
    </section>

export default LearnReact