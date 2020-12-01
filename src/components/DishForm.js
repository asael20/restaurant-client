import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { addDish } from "../apis/owner.api";
import { getAllMenus } from "../apis/restaurant.api";

const DishForm = function (props) {
    let { restaurantEmail } = props;
    let [menus, setMenus] = useState([])
    let [count, setCount] = useState(0)

    function putDish(e) {
        e.preventDefault();
        let formData = new FormData(e.target);

        addDish(formData, localStorage.getItem('token')).then(val => {
            if (!val.ok) {
                alert('Ubo un error')
                return
            }
            alert('Plato guardado exitosamente')
        });

    }


    useEffect(() => {
        getAllMenus(restaurantEmail).then(value => {
            console.log(restaurantEmail)
            console.log('MENUES ', value)
            setMenus(value.data)
        })

    }, [])


    return (
        <>
            <form onSubmit={putDish} className="container mt-5 ">

                <div className="row">
                    <div className="col-4">
                        <label htmlFor="">Nombre plato</label>
                        <input type="text" name="name" className="form-control" autoComplete="off" required />
                    </div>
                    <div className="">
                        <label htmlFor="">precio</label>
                        <input type="number" name="price" className="form-control" autoComplete="off" required />
                    </div>
                </div>

                ingredinetes
                <div className="row pt-2">

                    <div className="col-4">
                        <input className="form-control" type="text" name="ingredients" autoComplete="off" required />
                    </div>

                    <div className="col-4">
                        <input className="form-control" type="text" name="ingredients" autoComplete="off" required />
                    </div>

                    <div className="col-4">
                        <input className="form-control" type="text" name="ingredients" autoComplete="off" required />
                    </div>

                </div>

                <h4 className="mt-3 text-center"  >Valores nutricionales</h4>

                <div className="card p-3">

                    <div className="col">
                        <label htmlFor=""><h5>Proteína</h5></label>
                        <div className="ml-4 my-2 ">
                            <input type="number" className="form-control" name="proteina" autoComplete="off" required />
                        </div>
                    </div>

                    <div className="row">

                        <div className="col">
                            <h5>Carbohidratos</h5>
                            <div className="ml-4">
                                <div className="">
                                    <label htmlFor=""><strong>Fibra</strong></label>
                                    <input type="number" className="form-control" name="fibra" autoComplete="off" required />
                                </div>

                                <div className="">
                                    <label htmlFor=""><strong>Azúcar</strong></label>
                                    <input type="number" className="form-control" name="azucar" autoComplete="off" required />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h5>Grasa</h5>
                            <div className="ml-4">
                                <div>
                                    <label htmlFor=""><strong>Saturada</strong></label>
                                    <input type="number" className="form-control" name="grasa_saturada" id="" autoComplete="off" required />
                                </div>

                                <div>
                                    <label htmlFor=""><strong>Poliinsaturada</strong></label>
                                    <input type="number" className="form-control" name="grasa_poliinsaturada" id="" autoComplete="off" required />
                                </div>

                                <div>
                                    <label htmlFor=""><strong>Monoinsaturada</strong></label>
                                    <input type="number" className="form-control" name="grasa_monoinsaturada" id="" autoComplete="off" required />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <label htmlFor=""><strong>Descripción</strong></label>
                <div>
                    <textarea name="description" id="" cols="40" rows="5" style={{ resize: "none" }} autoComplete="off" required ></textarea>
                </div>

                <div>
                    <label htmlFor=""><strong>Menu al que pertenece el plato</strong></label>
                    <div>
                        <select name="menuTitle" id="" className="form-control" style={{ width: "40%" }} required>
                            <option value="">Seleccione uno</option>
                            {
                                menus.map((menu) => <option key={menu._id} value={menu.title}>{menu.title}</option>)
                            }
                        </select>
                    </div>

                </div>

                <div className="my-3">
                    <label htmlFor="photo" className="btn btn-warning text-white" style={{}}>
                        Foto del plato
                    </label>
                    <input type="file" name="image" id="photo" style={{ display: "none" }} />
                </div>

                <div style={{ display: "none" }} >
                    <input type="text" name="restaurant" value={restaurantEmail} />
                </div>
                <div className="bg-info btn justify-content-center">
                    <input type="submit" value="Guardar plato" className="btn text-white" />
                </div>
            </form>
        </>
    )
}



export default DishForm;