import React from "react";
import { saveMenu } from "../apis/owner.api";
const MenuForm = (props) => {
    
    let { restaurantEmail } = props;

    const createMenu = function(e){
        e.preventDefault();
        let form = e.target;
        let data = {
            title: form.title.value,
            description: form.description.value,
            restaurant: restaurantEmail
        }

        saveMenu(data, localStorage.getItem('token')).then((value) => {
            if(!value.ok){
                alert('error');
                console.log(value)
                return
            }

            alert('Menu registrado exitosamente')


        });



    }


    return (
        <>
            <form onSubmit={createMenu} className="container ">
                <div className="text-center">
                    <label htmlFor=""><strong>Título</strong></label>
                    <input type="text" className="form-control " name="title"  autoComplete="off" required/>
                </div>

                <div >
                    <label htmlFor="" className="d-block"><strong>Descripción</strong></label>
                   <textarea name="description" id="" cols="50" rows="5" style={{resize:"none", borderStyle:"none", border:"1px solid gray"}} required ></textarea>
                </div>

                <div className="bg-success text-center">
                    <input type="submit" className="btn text-white " value="Guardar" />
                </div>
            </form>
        </>
    )
}

export default MenuForm;