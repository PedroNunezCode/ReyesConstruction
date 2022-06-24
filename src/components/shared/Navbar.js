import React, { useState, useEffect } from 'react';
import CompanyLogo from '/public/assets/images/reyes_construction_logo.png';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
	const location = useLocation().pathname;
	const [prevElement, setPrevElement] = useState(false);
	const [homeClass, setHomeClass] = useState(false);

	useEffect(() => {
		if (location === "/"){
			setHomeClass(true);
		}else{
			setHomeClass(false);
		}
	},[location])


	const toggleActiveClass = (e) => {
		if (!prevElement) {
			setPrevElement(e.target);
		} else {
			prevElement.className = "navbar-link";
			setPrevElement(e.target);
		}

		return e.target.className = "navbar-link active";
	}

	return (
		<div className='navbar-container'>
			<div className='navbar-wrapper'>
				<a href='/'>
					<img src={CompanyLogo} className="header-logo" />
				</a>
				<div className='header-nav-links'>
					<Link to="/" className={homeClass ? "navbar-link active" : "navbar-link"} onClick={toggleActiveClass} name="home">HOME</Link>
					<Link to="/portfolio" className='navbar-link' onClick={toggleActiveClass} name="home">PORTFOLIO</Link>
					<Link to="/services" className='navbar-link' onClick={toggleActiveClass} name="home">SERVICES</Link>
					<Link to="/contact" className='navbar-link' onClick={toggleActiveClass} name="home">CONTACT</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar;