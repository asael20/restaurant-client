import React, { useEffect } from 'react';
import './Owner.css'

const OwnerForm = (props) => {


    const { onBack, onSave, reset} = props
    const formRef = React.createRef()

    const verifyField = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);
        let data = {
            ownerName:form.get('name'),
            lastName:form.get('lastName'),
            phone:form.get('phone'),
            userId:form.get('numberId'),
            typeId:form.get('typeId'),
            userType:1,
            email:form.get('email'),
            password:form.get('password')

        }
        onSave( data)
        
    }


    useEffect( ()=>{
        if(reset) formRef.current.reset()
    })


    return (
        <div>
            <form onSubmit={verifyField} ref={formRef}>
                <fieldset>
                    <legend>Información del propietario</legend>
                    <div>
                        <label htmlFor="">Nombres</label>
                        <input type="text" className="form-control" name="name" id="" autoComplete="off" required={true}/>
                    </div>

                    <div>
                        <label htmlFor="">Apellidos</label>
                        <input type="text" className="form-control  " name="lastName" id="" autoComplete="off"  required={true} />
                    </div>

                    <div>
                        <label htmlFor="" >tipo de identificación</label>
                        <select name="typeId" id="" className="form-control" defaultValue={null}  required={true} >
                            <option value="1">C.C</option>
                            <option value="2">C.E</option>
                            <option value="0" >---</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Número de identificación</label>
                        <input type="number" name="numberId" id="" className="form-control" autoComplete="off"  required={true} />
                    </div>

                    <div>
                        <label htmlFor="">Teléfono</label>
                        <input type="number" name="phone" id="" className="form-control" autoComplete="off"  required={true} />
                    </div>

                    <div>
                        <label htmlFor="">Correo electrónico</label>
                        <input type="email" name="email" id="" className="form-control" autoComplete="off"  required={true} />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" className="form-control" autoComplete="off"  required={true} />
                    </div>

                </fieldset>

                <div className="containet-btn-contr row" >
                    <input type="button" className="btn btn-back col" value="back" onClick={onBack} />
                    <div className="col-8"></div>
                    <input type="submit" className="btn btn-save col" value="Save" />
                </div>

            </form>
        </div>
    )
}

export default OwnerForm;