const LearnNode = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Node js</h1>
        <div className="content">
            <p>Making it work</p>
        </div>
    </section>

export default LearnNode