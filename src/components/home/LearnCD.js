const LearnCD = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgCD.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn Build Tools</h1>
        <img src="/img/cd.png" />
        <p>Automated, Certified Quality for the Real World</p>
        <ul>
            <li>Test-driven Development </li>
            <li>Behavior-driven Development</li>
            <li>Git, Docker, Travis, and more</li>
        </ul>
    </section>

export default LearnCD