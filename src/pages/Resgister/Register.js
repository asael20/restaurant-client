import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import RestaurantForm from '../../components/Restaurant/RestaurantForm'
import OwnerForm from '../../components/Owner/OwnerForm'
import './Register.css';
import { saveOwner } from '../../apis/owner.api';


const Register = () => {

    let [owner, setOwner] = useState({ name: '', lastName: '', typeId: 0, numberId: '', phone: '', email: '', password: '' })
    let [restaurant, setRestaurant] = useState({ name: '', direction: '', nit: 0, user: '', photo: '' })
    let [message, setMessage] = useState('')
    let [reset, setReset] = useState(false)
    let history = useHistory()

    const formRef = React.createRef();
    const divMessage = React.createRef();

    const toglePage = () => {

        let classList = formRef.current.className.split(' ');
        let classIndx = classList[1];
        let r = (classList.length == 2) ? classList.pop() : null

        if (classIndx === undefined || classIndx === 'move-back') {
            classList.push('move-next');
            formRef.current.className = classList.join(' ')
        } else {
            classList.push('move-back')
            formRef.current.className = classList.join(' ')
        }

    }


    const reciveOwnerData = async (ownerData) => {
        let form = new FormData();
        fillForm(ownerData, form);
        fillForm(restaurant, form);

        saveOwner(form).then( value => {
            alert('registro exitoso')
            history.push(`/owner/${ownerData.email}`)
            let data = {
                name:form.get('ownerName'), lastName: form.get('lastName'), phone:form.get('phone'),
                userType: form.get('typeId'), userId: form.get('userId'), email: form.get('email')
            }
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('token', value.token)
            console.log(value)
        })
        .catch(err => {
            console.log(err)
        })

    

    }



    const reciveRestaurantData = (restaurantData) => {
        setRestaurant(restaurantData)
        let form = new FormData();
        fillForm(restaurantData, form)

        toglePage();
    }

    const fillForm = (data, form) =>{
        let keys = Object.keys(data);

        keys.forEach( key => {
            form.append(key, data[key]);
        })
    }



    useEffect(() => {
        if(reset){
            let classList = divMessage.current.className.split(' ');
            classList.push('show-message alert-success')
            divMessage.current.className = classList.join(' ');
            setMessage('Restaurante registrado de forma exitosa')
        }
    })


    return (
        <div className="container w-50 " >
            <div className="alert message-res " role="alert" ref={divMessage} >{message}</div>
            <h1 className="text-center" >Registra tu restaurante aquí</h1>

            <div className="container-forms card">

                <div className="forms-row" ref={formRef}>
                    <div className="form-element restaurant-form">
                        <RestaurantForm
                            onNext={toglePage}
                            reciveRestaurantData={reciveRestaurantData}
                            reset={reset}
                        />
                    </div>

                    <div className="form-element owner-form">
                        <OwnerForm
                            onBack={toglePage}
                            onSave={reciveOwnerData}
                            reset={reset}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;


