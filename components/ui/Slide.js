import { PropTypes } from 'react'

const Slide = ({title, background, children}) =>
    <section className="slide" style={{backgroundImage: `url(${background})`}}>
        <h1>{title}</h1>
        <div className="content">
            {children}
        </div>
    </section>

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
}

export default Slide