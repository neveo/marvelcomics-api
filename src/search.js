import React, { Component } from 'react';
import './styles.css';

	const ts = '1608763962579';
	const public_key = '3a80597230483a002fa9628a2c7774f3';
	const uri = 'https://gateway.marvel.com/v1/public/characters?ts=';
	const hash = 'ac71a74a1bdc232da7c76480396ca1c2';
	const apiendpoint = uri + ts +'&apikey=' + public_key + '&hash=' + hash;

class Search extends Component {
	state ={
		searchValue: "",
		characters: []
	};

	handleOnChange = event => {
		this.setState({ searchValue: event.target.value});
	};

	handleSearch = () => {
		this.makeApiCall(this.state.searchValue);
	};

	makeApiCall = searchInput => {
		const searchUri = apiendpoint +'&nameStartsWith=' +searchInput;
		fetch(searchUri)
			.then(response => {
				return response.json();
			})
			.then(jsonData => {
				this.setState({ characters: jsonData.data.results});
			});
	};

	render() {

		return (
		<div className="App">
			<h1>Marvel Universe</ h1>
			<h2>Characters API from Marvel Universe</ h2>
			<input 
				name="text" 
				type="text" 
				placeholder="Type a character: Hulk, Iron man, Captain America, Thor etc ..."
				onChange={event => this.handleOnChange(event)}
				value={this.state.searchValue}
			/>
							
				<button className="fetch-button" onClick={this.handleSearch}>Search</button>
				{this.state.characters ? (
					<div>
					{this.state.characters.map((character, index) => (
						<div className="single-character" key={index}>
							<h2>{character.name}</h2>
							<p>{character.description}</p>
							<p><img className="photo" src={character.thumbnail.path+'.'+character.thumbnail.extension} alt="" /></p>
							
						</div>
					))}
					</div>
				) : (
					<p>Look up a character</p>				
				)}
		</div>
		);
	}
}

export default Search;
