import { delaySlideScreenUp, logoInOut, expandCollapseBox } from '../../lib'

const LearnNode = ({index, screenScale, screenHeight}) =>
    <section className="slide node"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
        <img src="/img/titles/node.png"  {...screenScale(logoInOut["portrait"])}/>
        <div className="box" {...screenScale(expandCollapseBox)}>
            <h1>Universal, Test Driven Updates</h1>
            <ul>
                <li>Service-oriented Architecture</li>
                <li>NoSQL Databases</li>
                <li>Express, Socket.IO, and more</li>
            </ul>
        </div>
    </section>

export default LearnNode


