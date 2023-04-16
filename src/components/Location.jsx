import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

import "../css/components/action.css"


function Location() {
    return (
        <a className="btn btn-ghost tooltip tooltip-bottom text-2xl md:text-xl mx-auto md:mr-4 md:ml-0" data-tip="Εμφάνιση στο χάρτη" target="_blank" href="https://www.google.com/maps/place/%CE%A4%CE%BF+%CE%A3%CF%84%CE%B5%CE%BD%CE%AC%CE%BA%CE%B9/@40.4738317,25.5248847,17.5z/data=!4m6!3m5!1s0x14ae247cdadc9f11:0x545d341c5c6560df!8m2!3d40.473862!4d25.5243197!16s%2Fg%2F11c1lw88pp" >
            <FontAwesomeIcon icon={faCompass} />
        </a>
    )
}

export default Location