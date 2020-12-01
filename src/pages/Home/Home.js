import React from 'react';
import RestaurantList from '../../components/Restaurant/RestaurantList'

const Home = () => {
    return (
        <>
            <h2 className="text-center mt-3">Restaurants</h2>
            <RestaurantList />
        </>
    )
}

export default Home;