let stayInPlace = {
    '0%': {
        top: '2%'
    },
    '100%': {
        top: '102%'
    }
}

let collapseWhen = {
    '2.5%': {
        'left': '5%',
        'height': '140px',
        'top': '37%'
    },
    '60%': {
        'left': '5%',
        'height': '0',
        'top': '95%'
    },
    '70%': {
        'left': '105%'
    }

}

const LearnHTML = ({screenConfig, index, screenScale}) =>
    <section className="slide html"
             style={{
                 backgroundImage: `url(/img/bgHTML.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/html.png" {...screenScale(stayInPlace)}/>
        <div className="box" {...screenScale(collapseWhen)}>
            <h1>Responsive, Accessible Patches</h1>
            <ul>
                <li>Flexbox and Animations</li>
                <li>Data Visualizations</li>
                <li>HTML6, CSS4, SVG, and more</li>
            </ul>
        </div>
    </section>

export default LearnHTML