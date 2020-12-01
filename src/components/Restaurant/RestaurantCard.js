import React from 'react';
import {Link, Route, NavLink} from 'react-router-dom'
import RestaurantSide from './RestaurantSide'
const RestaurantCard = (props) => {

    let { direction, name, nit, photo, user } = props;


    return (
        <div className="card mt-2" style={{ width: "18rem" }}>
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">estamos ubicados en: <address>{direction}</address> </p>
                
                <Link to={`/restaurant/${user}`} className="nav-link text-white bg-info">Go there</Link>

            </div>
        </div>
    )
}

export default RestaurantCard;