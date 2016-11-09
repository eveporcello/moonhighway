import { delaySlideScreenUp, logoInOut, expandCollapseBox } from '../../lib'

const LearnReact = ({index, screenScale, screenHeight}) =>
    <section className="slide react"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>

    </section>

export default LearnReact


//<img src="/img/react.png" {...screenScale(logoInOut)}/>
//<div className="box" {...screenScale(expandCollapseBox)}>
//<h1>Declarative Upgrades</h1>
//<ul>
//<li>Functional Programming</li>
//<li>Unidirectional Dataflow</li>
//<li>React, Redux, and more</li>
//</ul>
//</div>