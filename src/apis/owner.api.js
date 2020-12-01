export function saveOwner(owner) {
    let objRequest = { method:'POST', body: owner }
    let result =  fetch('http://localhost:3000/tracker-eatery.apiservice/owner/signup' ,objRequest)
        .then( value => value.json() ).then( result => result);

    return result;
}

export function verifyOwner(credentials) {
   
    let objRequest = { method:'POST', body: JSON.stringify(credentials), headers:{'Content-type': 'application/json'}  }
    let result =  fetch(' http://localhost:3000/tracker-eatery.apiservice/owner/signin' ,objRequest)
        .then( value => value.json() ).then( result => result);

    return result;
}

// http://localhost:3000/tracker-eatery.apiservice/owner/1002495333/myrestaurants

export function getMyRestaurantInfo(id, token) {
   
    let objRequest = { method:'GET', headers:{'Authorization': `Bearer ${token}`}  }
    let result =  fetch(`http://localhost:3000/tracker-eatery.apiservice/owner/${id}/myrestaurants` ,objRequest)
        .then( value => value.json() ).then( result => result);

    return result;
}

export function saveMenu(menu, token) {
    let objRequest = { method:'POST', body: JSON.stringify(menu),  headers:{'Authorization': `Bearer ${token}`, 'Content-type': 'application/json'}  }
    let result =  fetch('http://localhost:3000/tracker-eatery.apiservice/owner/restaurant/menu/create' ,objRequest)
        .then( value => value.json() ).then( result => result);

    return result;
}


export function addDish(dish, token) {
    let objRequest = { method:'POST', body: dish, headers:{'Authorization': `Bearer ${token}`} }
    let result =  fetch('http://localhost:3000/tracker-eatery.apiservice/owner/restaurant/menu/dish/create' ,objRequest)
        .then( value => value.json() ).then( result => result);

    return result;
}