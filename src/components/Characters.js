import React from 'react';

function Characters(props) {
    const {id, name, status, species, gender, image} = props;

    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt ={name}/>
        </div>
    );
}

export default Characters;
