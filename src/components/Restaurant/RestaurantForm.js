import React, { Component, useEffect, useState } from 'react';
import './Restaurant.css'


const RestaurantForm = (props) => {
    let [url, setUrl] = useState('https://image.flaticon.com/icons/png/512/83/83410.png')
    const { reciveRestaurantData, upload, reset } = props;
    const formRef = React.createRef()

    const sendData = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        let data = { 
            restaurantName: form.get('name'), 
            address:form.get('direction'), nit:form.get('nit'), 
            user:`${form.get('user')}@Traker.com`, image:form.get('photo') 
        }
        
        reciveRestaurantData(data)

    }


    const showImage = (e) => {
        let photo = e.target.files[0]
        let url = URL.createObjectURL(photo)
        setUrl(url)
    }

    useEffect( ()=>{
        if(reset) formRef.current.reset()
    })


    return (
        <>
            <div className="">
                <form className="restaurant-form " ref={formRef} onSubmit={sendData} >

                    <fieldset className="">

                        <div className="container-image container justify-content-center d-flex">
                            <img src={url} alt="" />
                        </div>


                        <legend>Información del establecimiento</legend>

                        <div className="form-group w-100 ">
                            <label htmlFor="">Nombre del restaurante</label>
                            <input type="text" className="form-control" name="name" id="" autoComplete="off" required={true} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Dirección</label>
                            <input type="text" className="form-control" name="direction" id="" autoComplete="off" required={true} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Nit</label>
                            <input type="number" className="form-control" name="nit" id="" autoComplete="off" required={true} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">usuario para el restaurante</label>
                            <input type="text" className="form-control" name="user" id="" autoComplete="off" required={true} />
                            
                        </div>

                        <div>
                            <input type="file" name="photo" onChange={showImage} />
                        </div>

                    </fieldset>

                    <input type="submit" className="btn btn-warning" value="Next" />


                </form>
            </div>
        </>
    )

}


export default RestaurantForm;


