import React from "react";
import { NavLink, BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Register from "../../pages/Resgister/Register";
import RestaurantSide from '../Restaurant/RestaurantSide'
import Home from "../../pages/Home/Home";
import './Navigation.css'
import LoginOwner from "./LoginOwner";
import OwnerPage from "../../pages/OwnerPage/OwnerPage";
const Navigation = (props) => {


    return (
        <>
            <Router>
                <nav className="navigation py-2">
                    <span className="lead ml-2"  >TrackerEatery</span>
                    <ul className="nav justify-content-end">

                        <li className="nav-item mr-3">
                            <NavLink to="/" exact className="nav-link text-white bg-info">Home</NavLink>
                        </li>

                        <li className="nav-item mr-3" >
                            <NavLink to="/registro" className="nav-link text-white bg-info">Registrar restaurante</NavLink>
                        </li>

                        <li className="nav-item mr-3" >
                            <NavLink to="/login/owner" className="nav-link text-white bg-info">iniciar sesion</NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/restaurant/:user' >
                        <RestaurantSide />
                    </Route>

                    <Route path="/registro" >
                        <Register />
                    </Route>
                    
                    <Route path="/login/owner" >
                        <LoginOwner />
                    </Route>

                    <Route path="/owner/:email">
                        <OwnerPage />
                    </Route>


                    <Route path="/" >
                        <Home />
                    </Route>
                </Switch>

            </Router>
        </>
    )

}

export default Navigation;