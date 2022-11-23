import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Intro from './Intro';
import Who from './Who';
import Projects from './Projects';
import '../style/header.css';
import logo from "../img/logo.png";

function Header(props) {
	let [activeState, setActiveState] = useState(true);
	let [colorText, setColorText] = useState({
		color: '#000'
	});
	const [count, setCount] = useState(true);
	useEffect(() => {
		BackgroundChangeTwo();
		setCount(count => !count);
	}, [count])
	const BackgroundChangeTwo = () => {
		let href = window.location.href;
		if (href == 'https://spa-portfolio-blond.vercel.app/intro') {
			handlePageChangeIntro();
		}
		if (href == 'https://spa-portfolio-blond.vercel.app/who') {
			handlePageChangeWho();
		}
		if (href == 'https://spa-portfolio-blond.vercel.app/projects') {
			handlePageChangeProjects();
		}
	}


	const handlePageChangeIntro = () => {
		props.onChange();
		setColorText({ color: '#000000' });
		setActiveState(true);
	}
	const handlePageChangeWho = () => {
		props.onChange();
		setColorText({ color: '#FFFFFF' });
		setActiveState(true);
	}
	const handlePageChangeProjects = () => {
		props.onChange();
		setColorText({ color: '#F9E324' });
		setActiveState(true);
	}

	return (
		<>
			<header>
				<div className="logo">
					<img src={logo} alt="#" />
				</div>
				<div className={activeState ? 'menu' : 'menu menu-active'}>
					<nav>
						<ul className="list"  >
							<li onClick={handlePageChangeIntro}><Link style={colorText} to="/intro">INTRO</Link></li>
							<li onClick={handlePageChangeWho}><Link style={colorText} to="/who" >WHO</Link></li>
							<li onClick={handlePageChangeProjects}><Link style={colorText} to="/projects" >PROJECTS</Link></li>
						</ul>
					</nav>
					<div className="contact" style={colorText}>
						CONTACT
					</div>
				</div>
				<div className='burger' >
					{/* <a href="#" className="menu-btn" onClick={berger}> */}
					<a id="mb" href="#" className={activeState ? 'menu-btn' : 'menu-btn menu-btn_active'} onClick={() => setActiveState(!activeState)}>
						<span></span>
					</a>
				</div>
			</header>
			<Routes  >
				<Route path="/" element={<Intro style={activeState ? ' ' : 'display:none;'} />} />
				<Route path="/intro" element={<Intro style={activeState ? ' ' : 'display:none;'} />} />
				<Route path="/who" element={<Who style={activeState ? ' ' : 'display:none;'} />} />
				<Route path="/projects" element={<Projects style={activeState ? ' ' : 'display:none;'} />} />
			</Routes>
		</>
	);
}

export default Header;