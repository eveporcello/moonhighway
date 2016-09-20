import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import GithubIcon from 'react-icons/lib/fa/github'

const Contact = ({relaxConfig, index}) =>
    <section className="slide"
             style={{
                 backgroundImage: `url(/img/bgContact.png)`,
                 zIndex: 1000-index
             }}
             {...relaxConfig}>
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
                <input type="text" />
                <textarea></textarea>
                <button>send</button>
            </form>
            <TwitterIcon />
            <FacebookIcon />
            <GithubIcon />
        </p>
    </section>

export default Contact