const LearnReact = ({screenConfig, index}) =>
    <section className="slide react"
             style={{
                 backgroundImage: `url(/img/bgReact.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/react.png"/>
        <div className="box">
            <h1>Declarative, Functional Upgrades</h1>
            <ul>
                <li>Functional Programming</li>
                <li>Unidirectional Dataflow</li>
                <li>React, Redux, and more</li>
            </ul>
        </div>
    </section>

export default LearnReact