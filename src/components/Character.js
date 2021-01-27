import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({id,name,description,thumbnail}) => {
    return (
        <article className="character">
            <div className="img-container">
                <img src={thumbnail.path+'.'+thumbnail.extension} alt={name} />
                
            </div>
            <div className="character-footer">
                <h3>{name}</h3>
                <h5>{description ? description : 'No detailed description provided on this character.'}</h5>
                <Link to={`/marvelcomics-api/character/${id}`} className="btn btn-primary">Details</Link>
            </div>
        </article>
    );
}

export default Character;