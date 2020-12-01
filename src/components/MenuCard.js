import React from 'react'

const MenuCard = (props) => {
    let {  menu } = props

    let dishes = menu.dishes
    console.log(dishes)
    return (
        <div className="container">
            <h1>Platos</h1>

            <section>
                <div className="row ">
                    {
                        dishes.map( dish => {
                            return(
                                <div className="card m-2">
                                    <div class="container">
                                        <img src={dish.image} alt="..." class="rounded-circle" />
                                    </div>
                                    <div className="card-body ">
                                        <h5 className="card-title">{dish.name}</h5>
                                        <p className="card-text" style={{overflowWrap:'break-word', whiteSpace: 'pre-wrap'}}>{dish.description}</p>
                                        <span>valor: {dish.price}</span>
                                    </div>
                                    <button className="bg-success btn text-white" >Comprar</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </div>
    )

}


export default MenuCard