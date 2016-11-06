import C from '../../config.json'
import { SocialIcons, ExpandableSelectList } from '../ui'
import '../../stylesheets/Contact.scss'

export const expandBox = {
    '-30%': {
        height: '0%',
        left: '-105px'
    },
    '-15%': {
        height: '0%',
        left: '5%'
    },
    '0%': {
        left: '5%',
        height: '63%'
    }
}

const Contact = ({index, screenScale}) => {

    let _email, _subjects, _message

    const submit = () => {
        alert(`
TODO: Send Message
to: ${_email.value}
subjects: ${_subjects.value}
message: ${_message.value}
        `)
    }

    return (
        <section className="slide contact"
                 style={{
                     backgroundImage: `url(/img/bgContact.png)`,
                     zIndex: 1000-index
                 }}
                 {...screenScale({'0%': {top: '0px'}})}>
            <div className="box" {...screenScale(expandBox)}>
                <h1>Contact Us</h1>
                <SocialIcons />
                <p>For migration and installation instructions, please get in touch.</p>
                <p>
                    <a href="mailto:info@moonhighway.com">info@moonhighway.com</a>
                    <span>|</span>
                    <a href="tel:5305233084">530.523.3084</a>
                    <span>PO BOX 1578, Tahoe City, CA 96145</span>
                </p>
                <form action="javascript:void(0)" onSubmit={submit}>
                    <p>What are you interested in learning?</p>
                    <ExpandableSelectList ref={i=> _subjects = i}
                                          options={C.contact.subjects}>
                        Choose all that apply
                    </ExpandableSelectList>
                    <input ref={i => _email = i} type="email" placeholder="email" required/>
                    <textarea ref={i => _message = i} placeholder="Other thoughts or topics of interest?"/>
                    <button>SEND</button>
                </form>
            </div>
        </section>
    )
}


export default Contact