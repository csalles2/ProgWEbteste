import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";

function Card(props){
    const { id,name,episodes,air_date } = props;

    return(
        <Link to={`/episodios`} className="card">
            <h1 src={name} alt={name} />
            <p>{name}</p>
            {console.log(id)}
            <h1 src={episodes} alt={episodes} />
            <p>{episodes}</p>
            {console.log(id)}
            <h1 src={air_date} alt={air_date} />
            <p>{air_date}</p>
            {console.log(id)}

        </Link>
    );
}

export default Card;