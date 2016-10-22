const LearnReact = ({screenConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgReact.png)`,
                 zIndex: 1000-index
             }}
             {...screenConfig}>
        <img src="/img/react.png" />
        <p>Declarative, Functional Upgrades</p>
        <ul>
            <li>Functional Programming</li>
            <li>Unidirectional Dataflow</li>
            <li>React, Redux, and more</li>
        </ul>
    </section>

export default LearnReact