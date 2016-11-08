import { delaySlideScreenUp, logoInOut, expandCollapseBox } from '../../lib'

const LearnHTML = ({index, screenScale, screenHeight}) =>
    <section className="slide html"
             style={{
                 backgroundImage: `url(/img/bgHTML.png)`,
                 zIndex: 1000-index
             }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
    </section>

export default LearnHTML

//<img src="/img/html.png"  {...screenScale(logoInOut)}/>
//<div className="box" {...screenScale(expandCollapseBox)}>
//<h1>Responsive, Accessible Patches</h1>
//<ul>
//<li>Flexbox and Animations</li>
//<li>Data Visualizations</li>
//<li>HTML6, CSS4, SVG, and more</li>
//</ul>
//</div>