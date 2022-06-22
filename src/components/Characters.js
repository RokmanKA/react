import reacts from 'react';

function Сharacters(props) {
    const { name, surname, age, info, photo, alt } = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{surname}</p>
            <div>{age}</div>
            <div>{info}</div>
            <img src={photo} alt={alt}/>
        </div>

    );
}

export default Сharacters;