import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const { REACT_APP_TS, REACT_APP_PUBLIC_KEY, REACT_APP_HASH } = process.env;
const ts = `${REACT_APP_TS}`;
const public_key = `${REACT_APP_PUBLIC_KEY}`;
const hash = `${REACT_APP_HASH}`;
const uri = 'https://gateway.marvel.com/v1/public/characters?ts=';
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
		<>	
		<div className="container">
			<div className="title">
				<h1 class="header-main-title">Characters of Marvel Universe</h1>
				<div className="underline"></div>
			</div>

			<input 
				name="text" 
				type="text" 
				placeholder="Type a character: Hulk, Iron man, Captain America, Thor etc ..."
				onChange={event => this.handleOnChange(event)}
				value={this.state.searchValue}/>
							
				<button className="fetch-button" onClick={this.handleSearch}>Search</button>

			  	{this.state.characters.map((character, index) => (
						<Card className={useStyles.root} key={index} style={{width: 400}}>
						  <CardActionArea>
						    <CardMedia
						      style={{width:400,height:300}}
						      image={character.thumbnail.path+'.'+character.thumbnail.extension}
						      title="Marvel Characters"
						    />
						    <CardContent>
						      <Typography gutterBottom variant="h5" component="h2" align="left">
						        {character.name}
						      </Typography>
						      <Typography variant="body2" color="textSecondary" component="p" align="left">
						        {character.description}
						      </Typography>
						    </CardContent>
						  </CardActionArea>
						</Card>
					))
				}
		</div>
		</>
		);
	}
}

export default Search;
