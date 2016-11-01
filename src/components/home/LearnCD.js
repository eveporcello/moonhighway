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
        'top': '40%'
    },
    '60%': {
        'left': '5%',
        'height': '0',
        'top': '95%'
    },
    '80%': {
        'left': '105%'
    }

}

const LearnCD = ({screenConfig, index, screenScale}) =>
    <section className="slide cd"
             style={{
                 backgroundImage: `url(/img/bgCD.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/cd.png" {...screenScale(stayInPlace)}/>
        <div className="box" {...screenScale(collapseWhen)}>
            <h1>Automated, Certified, Quality for the Real World</h1>
            <ul>
                <li>Test-driven Development</li>
                <li>Behavior-driven Development</li>
                <li>Git, Docker, Travis, and more</li>
            </ul>
        </div>
    </section>

export default LearnCD