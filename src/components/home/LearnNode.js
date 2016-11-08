import { delaySlideScreenUp, logoInOut, expandCollapseBox } from '../../lib'

const LearnNode = ({index, screenScale, screenHeight}) =>
    <section className="slide node"
             style={{
                 backgroundImage: `url(/img/bgNode.png)`,
                 zIndex: 1000-index
             }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
    </section>

export default LearnNode

//<img src="/img/node.png"  {...screenScale(logoInOut)}/>
//<div className="box" {...screenScale(expandCollapseBox)}>
//<h1>Universal, Test Driven Updates</h1>
//<ul>
//<li>Service-oriented Architecture</li>
//<li>NoSQL Databases</li>
//<li>Express, Socket.IO, and more</li>
//</ul>
//</div>