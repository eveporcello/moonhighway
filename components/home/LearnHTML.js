const LearnHTML = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                backgroundImage: `url(/img/bgHTML.png)`,
                zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>HTML &amp; CSS</h1>
        <div className="content">
            <p>Making things look great</p>
        </div>
    </section>

export default LearnHTML