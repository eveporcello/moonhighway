const LearnNode = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn Node</h1>
        <img src="/img/node.png" />
        <p>Test-driven, Universal Updates</p>
        <ul>
            <li>Service-oriented Architecture</li>
            <li>NoSQL Databases</li>
            <li>Express, Socket.IO, and more</li>
        </ul>
    </section>

export default LearnNode