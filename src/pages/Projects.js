import React, { useState } from 'react';
import Project from '../component/Project';
import Modal from '../component/Modal';
import '../style/projects.css';

function Projects(props) {
	//хук для модального окна
	let [isModal, setModal] = useState(false);
	let [modalObject, setModalObject] = useState({});
	//массив с объектами карточек моих проектов
	let [cardsObject, setCardsObject] = useState([
		{
			title: "Скоро будет",
			text: "Описание проекта ",
			img: require('../img/Noname.jpg')
		},
		{
			title: "Винный магазин",
			text: "Верстка адаптивного и кроссбраузерного лендинга",
			img: require('../img/Templates.jpg'),
			href: "#"
		},
		{
			title: "KONSTUCT",
			text: "Верстка адаптивного и кроссбраузерного лендинга",
			img: require('../img/Maketadaptiv.png'),
			href: "#"
		},
		{
			title: "Moon River",
			text: "Верстка лендинга",
			img: require('../img/Moon River short.png'),
			href: "#"
		},
		{
			title: "QPICK",
			text: "Интеренет магазин",
			img: require('../img/QPICK.png'),
			href: "https://vercel-r3gkk9ssv-zhirayr007.vercel.app"
		}
	]);
	// 	{
	// 		title: "Винный магазин",
	// 		text: "Верстка адаптивного и кроссбраузерного лендинга",
	// 		img: require('../img/Templates.jpg')
	// 	},
	// 	{
	// 		title: "Винный магазин",
	// 		text: "Верстка адаптивного и кроссбраузерного лендинга",
	// 		img: require('../img/Maketadaptiv.png')
	// 	},
	// 	{	title: "Винный магазин",
	// 		text: "Верстка лендинга",
	// 		img: require('../img/Moon River short.png')
	// 	},
	// 	{
	// 		text: "Адаптивный сайт, кроссбраузерный и т.д",
	// 		img: require('../img/Templates.jpg')
	// 	}
	// ]
	//Функция для передачи нужных параметров для модульного окна
	function opneModalwindow(card) {
		setModal(true);
		setModalObject({
			title: card.title,
			text: card.text,
			img: card.img,
			href: card.href
		})
	}

	return (
		<div Style="width: 100%; background-color: #1745EB;">
			<div className="wrapper-projects" Style={props.style}>
				<div className="wrapper-projects__title">HeRe YoU CaN see SoMe of My PROJECTS</div>
				<div className="wrapper-projects__project" >
					<Project text={cardsObject[1].text} img={cardsObject[1].img} onClick={() => { opneModalwindow(cardsObject[1]) }} />
					<Project text={cardsObject[2].text} img={cardsObject[2].img} onClick={() => { opneModalwindow(cardsObject[2]) }} />
					<Project text={cardsObject[3].text} img={cardsObject[3].img} onClick={() => { opneModalwindow(cardsObject[3]) }} />
					<Project text={cardsObject[4].text} img={cardsObject[4].img} onClick={() => { opneModalwindow(cardsObject[4]) }} />
					<Project text={cardsObject[0].text} img={cardsObject[0].img} onClick={() => { opneModalwindow(cardsObject[0]) }} />
					<Project text={cardsObject[0].text} img={cardsObject[0].img} onClick={() => { opneModalwindow(cardsObject[0]) }} />
					<Project text={cardsObject[0].text} img={cardsObject[0].img} onClick={() => { opneModalwindow(cardsObject[0]) }} />
					<Project text={cardsObject[0].text} img={cardsObject[0].img} onClick={() => { opneModalwindow(cardsObject[0]) }} />
				</div>
				<Modal
					isVisible={isModal}
					title={modalObject.title}
					text={modalObject.text}
					img={modalObject.img}
					href={modalObject.href}
					onClose={() => setModal(false)}
				/>
			</div>
		</div >

	);
}

export default Projects;