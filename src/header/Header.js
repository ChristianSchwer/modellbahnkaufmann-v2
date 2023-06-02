import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='HeaderWrapper'>
            <img src={Logo} className='HeaderImage' alt='logo'/>
            <div className='HeaderContainer'>
                <p className='HeaderSlogan'>Das Fachgeschäft für Modellbau und Modelleisenbahn</p>
                <div className='HeaderInfoWrapper'>
                    <div className='HeaderInfo1'>
                        <p className='HeaderInfo'>Bahnhofstraße 12</p>
                        <p className='HeaderInfo'>6850 Dornbirn</p>
                        <p className='HeaderInfo'>+43 5572/54149</p>
                        <p className='HeaderInfo'>modellbahn@avidonet.at</p>
                        <p className='HeaderInfo'>www.modellbahnkaufmann.at</p>
                    </div>
                    <div className='HeaderInfo2'>
                        <p className='HeaderInfo'>Öffnungszeiten:</p>
                        <p className='HeaderInfo'>Mo-Fr 09:00-12:00 Uhr</p>
                        <p className='HeaderInfo'>Mo-Fr 14:00-18:00 Uhr</p>
                        <p className='HeaderInfo'>Sa 09:00-12:00 Uhr</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Navbar'>
            <Link to='/' className='NavbarLinks'>
                Startseite
            </Link>
            <Link to='/inventar' className='NavbarLinks'>
                Unternehmen
            </Link>
            <Link to='/inventar' className='NavbarLinks'>
                Produkte
            </Link>
            <Link to='/inventar' className='NavbarLinks'>
                Aktionen
            </Link>
            <Link to='/inventar' className='NavbarLinks'>
                Service
            </Link>
        </div>
    </div>
  )
}

export default Header;