import { delaySlideScreenUp, logoInOut, expandCollapseBox } from '../../lib'

const LearnCD = ({index, screenScale, screenHeight}) =>
    <section className="slide cd"
             style={{ zIndex: 1000-index }}
        {...screenScale(delaySlideScreenUp(screenHeight))}>
    </section>

export default LearnCD

//<img src="/img/cd.png"  {...screenScale(logoInOut)}/>
//<div className="box" {...screenScale(expandCollapseBox)}>
//<h1>Automated, Certified Quality</h1>
//<ul>
//<li>Test-driven Development</li>
//<li>Behavior-driven Development</li>
//<li>Git, Docker, Travis, and more</li>
//</ul>
//</div>