import Deck from './Deck'
import { Relax } from '../relax'
import Slide from './Slide'

const slides = [
    {
        title: "Updating Engineers",
        background: "/img/bgHome.png",
        text: "Home Page"
    },
    {
        title: "React",
        background: "/img/bgReact.png",
        text: "React Page"
    },
    {
        title: "Node js",
        background: "/img/bgNode.png",
        text: "Node js Page"
    },
    {
        title: "HTML6 and CSS4",
        background: "/img/bgHTML.png",
        text: "Design Page"
    },
    {
        title: "Continueous Delivery",
        background: "/img/bgCD.png",
        text: "Work Page"
    }
];

const HomeDeck = () =>
    <Relax scrollHeight={5000}>
        {slides.map((slide, i) =>
            <Slide key={i} {...slide} />
        )}
    </Relax>

export default HomeDeck