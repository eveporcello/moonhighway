import { delaySlideScreenUp, logoInOut, expandCollapseBox, screenLayout } from '../../lib'
import { ResponsiveImg } from '../ui'

const LearnCD = ({index, screenScale, screenHeight}) =>
    <section className="slide cd"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
        <ResponsiveImg portrait="/img/titles/cd.png"
                       landscape="/img/titles/cd-long.png"
            {...screenScale(logoInOut[screenLayout()])} />
        <div className="box" {...screenScale(expandCollapseBox[screenLayout()])}>
            <h1>Automated, Certified Quality</h1>
            <ul>
                <li>Test-driven Development</li>
                <li>Behavior-driven Development</li>
                <li>Git, Docker, Travis, and more</li>
            </ul>
        </div>
    </section>

export default LearnCD


