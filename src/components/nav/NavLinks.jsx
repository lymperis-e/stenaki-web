import React from 'react'
import Location from "../Location";
import ThemeToggle from "../ThemeToggle";
import Hours from '../Hours';

import NavLinkElement from './NavLinkElement';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavLinks() {
    return (
        <>

            <NavLinkElement data-tip="Τηλέφωνο Επικοινωνίας" target="_blank" href="tel:2551042032" >
                <FontAwesomeIcon icon={faPhone} />
                <div className='hidden md:inline'>
                    &nbsp;2551042032
                </div>
            </NavLinkElement>


            <NavLinkElement data-tip="Ωράριο : 11:00π.μ. - 01:00π.μ."  >
                <FontAwesomeIcon icon={faClock} />
                <div className='hidden md:inline'>
                    &nbsp;11:00π.μ. - 01:00π.μ.
                </div>
            </NavLinkElement>



            <NavLinkElement data-tip="Instagram" target="_blank" href="https://www.instagram.com/stenaki_samothraki" >
                <FontAwesomeIcon icon={faInstagram} />
                <div className='hidden md:inline'>
                    &nbsp;to_stenaki
                </div>
            </NavLinkElement>

            <NavLinkElement data-tip="Εμφάνιση στο χάρτη" target="_blank" href="https://www.google.com/maps/place/%CE%A4%CE%BF+%CE%A3%CF%84%CE%B5%CE%BD%CE%AC%CE%BA%CE%B9/@40.4738317,25.5248847,17.5z/data=!4m6!3m5!1s0x14ae247cdadc9f11:0x545d341c5c6560df!8m2!3d40.473862!4d25.5243197!16s%2Fg%2F11c1lw88pp" >
                <FontAwesomeIcon icon={faCompass} className="text-xl"/>
            </NavLinkElement>


            <ThemeToggle light='garden' dark='stenaki-retro' /> {/* coffe/luxury */}</>
    )
}

export default NavLinks


