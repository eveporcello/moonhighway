import { PropTypes } from 'react'

const Slide = ({title, background, text}) =>
    <div id="intro"
         data-0="opacity:1;top:3%;transform:rotate(0deg);transform-origin:0 0;"
         data-500="opacity:0;top:-10%;transform:rotate(-90deg);">
        <h1><a href="https://github.com/Prinzhorn/skrollr">skrollr</a></h1>
        <h2>parallax scrolling for the masses</h2>
        <p>let's get scrollin' ;-)</p>
        <p className="arrows">▼&nbsp;▼&nbsp;▼</p>
    </div>


    //<section className="slide" style={{backgroundImage: `url(${background})`}}>
    //    <h1>{title}</h1>
    //    <div data-200="top[bounce]: 500px;"
    //         data-550="top[bounce]: 250px"
    //         className="content">
    //        {text}
    //    </div>
    //</section>

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
}

export default Slide