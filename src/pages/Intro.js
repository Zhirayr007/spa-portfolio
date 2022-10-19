import React from 'react';
import '../style/intro.css';
import arrow from '../img/down-arrow.svg';
function Intro(props) {
	return (
		<div className="wrapper-intro" Style={props.style}>
			<div className="threejs">
				<span className="threejs__welcome" >Welcome</span>	  <br /> to my page
			</div>
			<div className="down">
				<div className="text">if you want to play</div>
				<div className="arrow">
					<img className="arrow-img" src={arrow}></img>
				</div>
			</div>
		</div>
	);
}

export default Intro;