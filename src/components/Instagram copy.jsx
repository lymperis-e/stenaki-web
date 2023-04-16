import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import "../css/components/action.css"

function Instagram() {
    return (
        <a className="btn-action tooltip tooltip-bottom  mx-auto md:mr-4 md:ml-0 text-2xl md:text-base" data-tip="Instagram" target="_blank" href="https://www.instagram.com/stenaki_samothraki" >
            <FontAwesomeIcon icon={faInstagram} />

            <div className='hidden md:inline'>
                &nbsp;to_stenaki
            </div>
        </a>
    )
}

export default Instagram