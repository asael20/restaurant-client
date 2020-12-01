import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllMenus } from '../../apis/restaurant.api';
import MenuCard from '../MenuCard';

function RestaurantSide(props) {
    let [visible, setvisible] = useState(false)
    let params = useParams()
    let [menus, setMenus] = useState([]);
    let [menuCurrent, setMenuCurrent] = useState(null)

    useEffect(() => {
        getAllMenus(params.user).then(value =>{
            if(value.data.length > 0)  setvisible(true);
            console.log(value.data)
            setMenus(value.data)
        })

    }, [])


    function showMenu(e) {
        let index = parseInt(e.target.id);
        setMenuCurrent(<MenuCard menu={menus[index]} />)
    }


    return (
        <>
            <div className="container ">
                {menus.length>0?<h2 className="text-center">Mira nuestros Menus</h2>: <h2>Este restaurante no tiene Menus registrados</h2>}

                <ul className="nav nav-tabs">
                    {
                        menus.length > 0 ?(menus.map((menu, index) => {
                            return (
                                <li className="nav-item" >
                                    <a className="nav-link active" href="#" id={index} onClick={showMenu} >{menu.title}</a>
                                </li>

                            )
                        })):null
                    }
                </ul>

                <div>
                   { (visible)? menuCurrent:null }
                </div>

            </div>

        </>
    )


}


export default RestaurantSide;