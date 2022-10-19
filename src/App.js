import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style/null.css';
import Header from './pages/Header';
import './App.css'

function App() {
	let [backgroundObject, setBackgroundObject] = useState({
		backgroundColor: '#F9E324'
	});
	//функция для смены цвета фона
	const handleBackgroundChange = (page) => {
		console.log('hello');
		if (page == 1) {
			setBackgroundObject({ backgroundColor: '#F9E324' })
		}
		if (page == 2) {
			setBackgroundObject({ backgroundColor: '#17181C' })
		}
		if (page == 3) {
			setBackgroundObject({ backgroundColor: '#1745EB' })
		}
	}

	return (
		<div className="App" style={backgroundObject}>
			<BrowserRouter>
				<Header onChange={handleBackgroundChange} />
			</BrowserRouter>
		</div>

	);
}

export default App;
