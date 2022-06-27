import {useEffect, useState} from "react";
import {Rocket} from "../rocket/Rocket";


function Rockets() {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setRockets(value.filter(value => value.Launch_year !== '2020')))
    },[]);

    return (
        <div>
            {rockets.map((rocket, index) => <Rocket key={index} item={rocket}/>)}
        </div>
    );
}

export {Rockets};