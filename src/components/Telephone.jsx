import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import "../css/components/action.css"

function Telephone() {
    return (
        <a className="btn btn-ghost tooltip tooltip-bottom  mx-auto md:mr-4 md:ml-0 text-2xl md:text-base " data-tip="Τηλέφωνο Επικοινωνίας" target="_blank" href="tel:2551042032" >
            <FontAwesomeIcon icon={faPhone} />
            <div className='hidden md:inline'>
                &nbsp;2551042032
            </div>
        </a>
    )
}

export default Telephone