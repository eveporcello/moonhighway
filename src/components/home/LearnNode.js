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

const LearnNode = ({screenConfig, index, screenScale}) =>
    <section className="slide node"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
        {...screenConfig}>
        <img src="/img/node.png" {...screenScale(stayInPlace)}/>
        <div className="box" {...screenScale(collapseWhen)}>
            <h1>Test-driven, Universal Updates</h1>
            <ul>
                <li>Service-oriented Architecture</li>
                <li>NoSQL Databases</li>
                <li>Express, Socket.IO, and more</li>
            </ul>
        </div>
    </section>

export default LearnNode