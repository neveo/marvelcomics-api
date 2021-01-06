import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';


function App(){
	const [characters, setCharacters] = useState("");
	const ts = '1608763962579';
	const public_key = '3a80597230483a002fa9628a2c7774f3';
	const uri = 'https://gateway.marvel.com/v1/public/characters?ts=';
	const hash = 'ac71a74a1bdc232da7c76480396ca1c2';
	const apiendpoint = uri + ts +'&apikey=' + public_key + '&hash=' + hash;

	const fetchData = () => {
		axios.get(apiendpoint).then((response) => {

			console.log(response.data.data.results);
			setCharacters(response.data);

			}
		);
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

		</div>



	</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
