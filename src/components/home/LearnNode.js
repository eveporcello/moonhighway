const LearnNode = ({screenConfig, index}) =>
    <section className="slide node"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/node.png"/>
        <div className="box">
            <h1>Test-driven, Universal Updates</h1>
            <ul>
                <li>Service-oriented Architecture</li>
                <li>NoSQL Databases</li>
                <li>Express, Socket.IO, and more</li>
            </ul>
        </div>
    </section>

export default LearnNode