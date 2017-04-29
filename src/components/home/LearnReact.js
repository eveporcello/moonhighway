import { delaySlideScreenUp, logoInOut, expandCollapseBox, screenLayout } from '../../lib'
import { Link } from 'react-router'

const LearnReact = ({index, screenScale, screenHeight}) =>
    <section className="slide react"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
        <img src="/img/titles/react.png" {...screenScale(logoInOut["portrait"])}/>
        <div className="box" {...screenScale(expandCollapseBox[screenLayout()])}>
            <h1>Declarative Upgrades</h1>
            <ul>
                <li>Functional Programming</li>
                <li>Unidirectional Dataflow</li>
                <li>React, Redux, and <Link to="/info/react-training">more &gt;</Link></li>
            </ul>
        </div>
    </section>

export default LearnReact
