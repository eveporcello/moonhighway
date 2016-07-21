const LearnReact = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgReact.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>React</h1>
        <div className="content">
            <p>Teaching React</p>
        </div>
    </section>

export default LearnReact