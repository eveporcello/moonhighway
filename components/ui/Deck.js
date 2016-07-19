import { PropTypes } from 'react'
import Slide from './Slide'

const Deck = ({slides=[]}) =>
    <div className="deck">
        {slides.map((slide,i) =>
            <Slide key={i} {...slide} />
        )}
    </div>

Deck.propTypes = {
    slides: PropTypes.array
}

export default Deck