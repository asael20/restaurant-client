import React, { useEffect, useState } from 'react';
import { getAllRestaurants } from '../../apis/restaurant.api';
import RestaurantCard from './RestaurantCard';


const RestaurantList = (props) => {

    let [count, setCount] = useState(0)
    let [restaurants, setRestaurants] = useState([]);
    let address = 'Nada Todavia';

    useEffect(() => {
        getAllRestaurants().then( val => setRestaurants(val.data) )
    }, [])

    return (
        <div className="container">
            <div className="row">
               {
                   restaurants.map(doc =>{
                       return (
                           <div className="col-4" key={doc._id}>
                               <RestaurantCard  direction={doc.address} name={doc.name} nit={doc.nit} photo={doc.image} user={doc.user} />
                           </div>
                       )
                   })
               }
               
            </div>
        </div>
    )
}

export default RestaurantList;