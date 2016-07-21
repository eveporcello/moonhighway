const LearnCD = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgCD.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Continuous Delivery</h1>
        <div className="content">
            <p>Moving fast with quality</p>
        </div>
    </section>

export default LearnCD