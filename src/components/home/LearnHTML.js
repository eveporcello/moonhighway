const LearnHTML = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgHTML.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Learn HTML</h1>
        <img src="/img/html.png" />
        <p>Responsive, Accessible Patches</p>
        <ul>
            <li>Flexbox and Animations</li>
            <li>Data Visualizations</li>
            <li>HTML6, CSS4, SVG, and more</li>
        </ul>
    </section>

export default LearnHTML