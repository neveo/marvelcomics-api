import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';


function App(){
	const [characters, setCharacters] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(
			'https://gateway.marvel.com/v1/public/characters?ts=1608763962579&apikey=3a80597230483a002fa9628a2c7774f3&hash=ac71a74a1bdc232da7c76480396ca1c2&limit=10'
		);

		setCharacters(response.data);
		console.log(setCharacters(response.data));
	};

	return(
	<div className="App">
		<h1>Marvel Universe</ h1>
		<h2>Fetch a list from Marvel characters from API</ h2>

		<div>
			<button className="fetch-button" onClick={fetchData}>
			Fetch Data 
			</ button>
			<br />
		</div>

		<div className="characters">
			{characters && 
				characters.map((character, index) => {

				return(
					<div className="character">
						<h2>{character.name}</h2>

						<div className="details">
							<p> {character.description} </p>
						</div>
					</div>
				);
			})}
		</div>
	</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
