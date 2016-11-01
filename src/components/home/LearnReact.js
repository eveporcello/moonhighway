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
        'top': '25%'
    },
    '70%': {
        'left': '5%',
        'height': '0',
        'top': '95%'
    },
    '80%': {
        'left': '105%'
    }

}

const LearnReact = ({index, screenConfig, screenScale}) =>
    <section className="slide react"
             style={{
                 backgroundImage: `url(/img/bgReact.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/react.png" {...screenScale(stayInPlace)} />
        <div className="box" {...screenScale(collapseWhen)}>
            <h1>Declarative, Functional Upgrades</h1>
            <ul>
                <li>Functional Programming</li>
                <li>Unidirectional Dataflow</li>
                <li>React, Redux, and more</li>
            </ul>
        </div>
    </section>

export default LearnReact