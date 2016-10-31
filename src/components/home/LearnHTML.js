const LearnHTML = ({screenConfig, index}) =>
    <section className="slide html"
             style={{
                 backgroundImage: `url(/img/bgHTML.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/html.png"/>
        <div className="box">
            <h1>Responsive, Accessible Patches</h1>
            <ul>
                <li>Flexbox and Animations</li>
                <li>Data Visualizations</li>
                <li>HTML6, CSS4, SVG, and more</li>
            </ul>
        </div>
    </section>

export default LearnHTML