const LearnCD = ({screenConfig, index}) =>
    <section className="slide cd"
             style={{
                 backgroundImage: `url(/img/bgCD.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/cd.png"/>
        <div className="box">
            <h1>Automated, Certified, Quality for the Real World</h1>
            <ul>
                <li>Test-driven Development</li>
                <li>Behavior-driven Development</li>
                <li>Git, Docker, Travis, and more</li>
            </ul>
        </div>
    </section>

export default LearnCD