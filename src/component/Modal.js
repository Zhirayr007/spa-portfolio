import React, { useEffect } from 'react'
import parrow from "../img/project_arrow.svg"
import '../style/modal.css';

const Modal = ({ isVisible = false, title, text, img, href, onClose }) => {
	const keydownHandler = ({ key }) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	};
	useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
		return () => document.removeEventListener('keydown', keydownHandler);
	});

	return !isVisible ? null : (
		<div className="modal" onClick={onClose}>
			<div className="modal-dialog" onClick={e => e.stopPropagation()}>
				<div class="modal-dialog__title">{title}</div>
				<img src={img} alt="" class="modal-dialog__img" />
				<div class="modal-dialog__down">
					<div class="down-text">{text}</div>
					<div class="down-button">
						<div className="down-button__text">посмотреть сайт</div>
						<button className="down-button__button">
							<a href={href}>
								<img src={parrow} alt="" />
							</a>

						</button>
					</div>
				</div>
				{/* <div className="modal-header">
					<h3 className="modal-title">{title}</h3>
					{/* <span className="modal-close" onClick={onClose}>
						&times;
					</span> }
			</div> */}
				{/* <div className="modal-body">
					<div className="modal-content">{content}</div>
				</div> */}


			</div>
		</div >
	);
};

export default Modal;