import { delaySlideScreenUp, logoInOut, expandCollapseBox, screenLayout } from '../../lib'
import { ResponsiveImg } from '../ui'

const LearnHTML = ({index, screenScale, screenHeight}) =>
    <section className="slide html"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
        <ResponsiveImg portrait="/img/titles/html.png"
                       landscape="/img/titles/html-long.png"
            {...screenScale(logoInOut[screenLayout()])} />
    </section>

export default LearnHTML


//<div className="box" {...screenScale(expandCollapseBox)}>
//<h1>Responsive, Accessible Patches</h1>
//<ul>
//<li>Flexbox and Animations</li>
//<li>Data Visualizations</li>
//<li>HTML6, CSS4, SVG, and more</li>
//</ul>
//</div>