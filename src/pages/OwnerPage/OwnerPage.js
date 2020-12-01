import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMyRestaurantInfo } from '../../apis/owner.api';
import DishForm from '../../components/DishForm';
import MenuForm from '../../components/MenuForm';

const OwnerPage = function (props) {
    let [owner, setOwner] = useState({});
    let [restaurant, setRestaurant] = useState({});
    let [menus, setMenus] = useState([]);
    let [count, setCount] = useState(0);
    let [form, setform] = useState(null)
    let history = useHistory();


    function logOut(e){
        localStorage.clear()
        history.push('/')
    }

    useEffect(() => {
        console.log('something change in my state')
        let token = localStorage.getItem('token')
        if (!token) {
            history.push('/login/owner')
        }

        let ownerData = JSON.parse(localStorage.getItem('user'))
        getMyRestaurantInfo(ownerData.userId, token)
            .then((value) => {
                if (!value.ok) {
                    localStorage.clear();
                    alert('Tu sesion ha expirado');
                    history.push('/login/owner');
                    return
                }
                setOwner(JSON.parse(localStorage.getItem('user')));
                console.log('RESPUESTA BASE DATOS ', value)

                setRestaurant(value.data.restaurant)
                setMenus(value.data.menus)
            })

    }, [])

    let containerForms = React.createRef();

    function showForm(e) {
        let btn = e.target;

        switch (btn.id) {
            case 'btn-shw-menu':

                setform(<MenuForm restaurantEmail={restaurant.user} />)
                break;

            case 'btn-shw-dish':

                setform(<DishForm restaurantEmail={restaurant.user} />)
                break;
        }

    }


    return (
        <>
            {console.log(restaurant)}
            <div className=" bg-dark text-white p-1">
                <div className="row">
                    <p className="col">Administrador: {owner.email}</p>
                    <div className="col d-flex justify-content-end ">
                        <button onClick={logOut} className="btn bg-danger text-white">LogOut</button>
                    </div>
                </div>
            </div>

            <div className=" bg-light p-3 content-center">
                <p className="text-center h4 text-dark">Restaurante: {restaurant.name}</p>
                <div className="row">
                    <button onClick={showForm} id="btn-shw-menu" className="btn btn-lg btn-info col  m-1">Añadir Menu</button>
                    <button onClick={showForm} id="btn-shw-dish" className="btn btn-lg btn-success col  m-1">Añadir nuevo plato</button>
                </div>
                <hr />
            </div>

            <div >
                {form}
            </div>

        </>
    )
}

export default OwnerPage;