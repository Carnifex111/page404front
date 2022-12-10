import { Link , NavLink } from 'react-router-dom';
import './navbar.scss'
import { useState } from 'react';


const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    
    const menuToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
    }
    
    return (
        <nav className='nav'>
            <Link className='nav__logo' to="/">Page404</Link>
            <div className={active}>
                <ul>
                <li className='nav__item'><NavLink exact activeClassName="nav__item__link-selected" className="nav__item__link" to="/">Home</NavLink></li>
                <li className='nav__item'><NavLink exact activeClassName="nav__item__link-selected" className="nav__item__link" to="/about">About</NavLink></li>
                <li className='nav__item'><NavLink exact activeClassName="nav__item__link-selected" className="nav__item__link" to="/skills">Skills</NavLink></li>
                <li className='nav__item'><NavLink exact activeClassName="nav__item__link-selected" className="nav__item__link" to="/connect">Connect</NavLink></li>
                </ul>
            </div>
            <div onClick={menuToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}

export default Navbar;