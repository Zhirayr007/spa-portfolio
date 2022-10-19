import React from 'react';
import '../style/who.css';
import proger from "../img/proger.png"


function Who(props) {
	return (
		<div class="wrapper-who" Style={props.style}>
			<div class="wrapper-who__img">
				<img src={proger} alt=""></img>
			</div>
			<div class="wrapper-who__text">
				<div class="hello">
					Hi, <br /> I’m Zhirayr <br /> JavaScript developer
				</div>
				<div class="about-me">
					<p>Junior programmer.
					</p>
					<p>Ready to take on a temporary job (freelancer)<br />
						and for a permanent one.
					</p>
					<p><span class="about-me__green">Responsible</span>, <span class="about-me__blue">hardworking</span> and <span class="about-me__yellow">polite</span>   .</p>
				</div>
			</div>
			{/* <div class="wrapper-who__my-skills">
				<div class="skills-title">my skills</div>
				<div class="skills-round"></div>
			</div> */}
		</div>
	);
}

export default Who;