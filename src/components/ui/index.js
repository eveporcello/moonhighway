import { PropTypes } from 'react'
import MdEject from 'react-icons/lib/md/eject'
import '../../stylesheets/DownButton.scss'

export const DownButton = ({onClick=f=>f}) =>
    <div className="down-button" onClick={onClick}>
        <div></div>
        <MdEject />
    </div>

DownButton.propTypes = {
    onClick: PropTypes.func
}