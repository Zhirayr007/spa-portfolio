import React from 'react'
import "../style/project.css";

export default function Project(props) {
	return (
		<div className="project-block" onClick={props.onClick}>
			<img className="project-block__img" src={props.img} alt="" />
			<div className="project-block__description">{props.text}</div>
		</div>
	)
}
