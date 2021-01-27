import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

//building endpoint with api keys
const { REACT_APP_TS, REACT_APP_PUBLIC_KEY, REACT_APP_HASH } = process.env;
const ts = `${REACT_APP_TS}`;
const public_key = `${REACT_APP_PUBLIC_KEY}`;
const hash = `${REACT_APP_HASH}`;
const url = 'https://gateway.marvel.com/v1/public/characters/'; 
const qstring = '?ts=' + ts +'&apikey=' + public_key + '&hash=' + hash;


const SingleCharacter = () => {
    const {id} = useParams();
    const [ loading, setLoading ] = React.useState(false);
    const [ character, setCharacter ] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        async function getCharacter(){
            try {
                const response = await fetch(`${url}${id}${qstring}`);
                const data = await response.json();
                console.log(data.data.results[0]);

                if(data.data.results){
                    const {name, description, comics, series, stories, thumbnail} = data.data.results[0]; 
                    const newCharacter = {name, description, comics, series, stories, thumbnail}
                    setCharacter(newCharacter);
                
                } else {
                    setCharacter(null);
                }
                setLoading(false);                
            } catch (error) {
                console.log(error);
                setLoading(false);
                
            }
        }
        getCharacter()
    }, [id]);

    if (loading){
        return <Loading />
    }
    if(!character){
        return <h2 className="section-title">no character to show</h2>
    }
    const {name, description, comics, series, stories, thumbnail} = character;
    return (
        <section className="section character-section">
            <Link to="/marvelcomics-api" className="btn btn-primary">
                back home
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={thumbnail.path+'.'+thumbnail.extension}  alt={name} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name: </span>{name}
                    </p>
                    <p>
                        <span className="drink-data">description: </span>{description ? description : 'No detailed description provided on this character.'}
                    </p>
                    <p>
                        <span className="drink-data">comics: </span>{comics.available}
                    </p>
                    <p>
                        <span className="drink-data">series: </span>{series.available}
                    </p>
                    <p>
                        <span className="drink-data">stories: </span>{stories.available}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SingleCharacter;