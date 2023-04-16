import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import "../css/components/action.css"
function Hours() {
    return (
        <a className="btn btn-ghost text-2xl md:text-base tooltip tooltip-bottom  mx-auto md:mr-4 md:ml-0" data-tip="Ωράριο : 11:00π.μ. - 01:00π.μ." >
            <FontAwesomeIcon icon={faClock} />
            <div className='hidden md:inline'>
                &nbsp;11:00π.μ. - 01:00π.μ.
            </div>
        </a>
    )
}

export default Hours