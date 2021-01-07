import React, { Component } from 'react';
import './styles.css';

	const ts = '1608763962579';
	const public_key = '3a80597230483a002fa9628a2c7774f3';
	const uri = 'https://gateway.marvel.com/v1/public/characters?ts=';
	const hash = 'ac71a74a1bdc232da7c76480396ca1c2';
	const apiendpoint = uri + ts +'&apikey=' + public_key + '&hash=' + hash;

	const useStyles = makeStyles({
	  root: {
	    maxWidth: 345,
	  },
	  media: {
	    height: 140,
	  },
	});	

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
				

			export default function MediaCard() {
			  const classes = useStyles();

			  return (
			  {this.state.characters ? (
			  	{this.state.characters.map((character, index) => (
						<Card className={classes.root} key={index}>
						  <CardActionArea>
						    <CardMedia
						      className={classes.media}
						      image="{character.thumbnail.path+'.'+character.thumbnail.extension}"
						      title="Marvel Characters"
						    />
						    <CardContent>
						      <Typography gutterBottom variant="h5" component="h2">
						        {character.name}
						      </Typography>
						      <Typography variant="body2" color="textSecondary" component="p">
						        {character.description}
						      </Typography>
						    </CardContent>
						  </CardActionArea>
						</Card>
					))}
				: (
					<p>Look up a character</p>				
				)}
			  );
			}


		</div>
		);
	}
}

export default Search;
