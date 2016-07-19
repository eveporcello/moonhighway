import Deck from './Deck'

const HomeDeck = () =>
    <Deck slides={[
        {
            title: "Updating Engineers",
            background: "/img/temp_home.png",
            text: "Home Page"
        },
        {
            title: "React",
            background: "/img/temp_react.png",
            text: "React Page"
        },
        {
            title: "Node js",
            background: "/img/temp_node.png",
            text: "Node js Page"
        },
        {
            title: "HTML6 and CSS4",
            background: "/img/temp_html.png",
            text: "Design Page"
        },
        {
            title: "Continueous Delivery",
            background: "/img/temp_cd.png",
            text: "Work Page"
        }
    ]}/>

export default HomeDeck