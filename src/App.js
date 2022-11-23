import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style/null.css';
import Header from './pages/Header';
import './App.css'

function App() {
	const [backgroundObject, setBackgroundObject] = useState({
		backgroundColor: '#F9E324'
	});

	//функция для смены цвета фона
	const BackgroundChange = () => {
		let href = window.location.href;
		if (href == 'https://spa-portfolio-blond.vercel.app/intro') {
			setBackgroundObject({ backgroundColor: '#F9E324' })
		}
		if (href == 'https://spa-portfolio-blond.vercel.app/who') {
			setBackgroundObject({ backgroundColor: '#17181C' })
		}
		if (href == 'https://spa-portfolio-blond.vercel.app/projects') {
			setBackgroundObject({ backgroundColor: '#1745EB' })
		}
	}

	return (
		<div className="App" style={backgroundObject} >
			<BrowserRouter>
				<Header
					//onChange={handleBackgroundChange} 
					onChange={BackgroundChange}
				/>
			</BrowserRouter>
		</div>

	);
}

export default App;
