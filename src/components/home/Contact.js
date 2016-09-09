const Contact = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgContact.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
        <h1>Contact Us</h1>
    </section>

export default Contact