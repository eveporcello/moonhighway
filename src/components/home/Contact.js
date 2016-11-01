import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import GithubIcon from 'react-icons/lib/fa/github'

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
        height: '90%'
    }
}

const Contact = ({index, screenScale}) =>
    <section className="slide contact"
             style={{
                 backgroundImage: `url(/img/bgContact.png)`,
                 zIndex: 1000-index
             }}
        {...screenScale({ '0%': { top: '0px' }})}>
        <div className="box" {...screenScale(expandBox)}>
            <h1>Contact Us</h1>
            <p>For migration and installation instructions, please get in touch.</p>
            <p>
                <a href="mailto:info@moonhighway.com">info@moonhighway.com</a>
                <a href="tel:5305233084">530.523.3084</a>
                <span>PO BOX 1578, Tahoe City, CA 96145</span>
                <form action="javascript:void(0)">
                    <fieldset>
                        <p>Add Options</p>
                    </fieldset>
                    <input type="text"/>
                    <textarea></textarea>
                    <button>send</button>
                </form>
                <TwitterIcon />
                <FacebookIcon />
                <GithubIcon />
            </p>
        </div>
    </section>

export default Contact