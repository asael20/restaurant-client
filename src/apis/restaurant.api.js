export function getAllRestaurants() {
    let data = fetch('http://localhost:3000/tracker-eatery.apiservice/restaurants')
        .then(value => value.json()).then(data => data)
        .catch(err => err);

    return data;
}

export function getAllMenus(user) {
    let data = fetch(`http://localhost:3000/tracker-eatery.apiservice/restaurant/${user}/menus/list`)
        .then(value => value.json()).then(data => data)
        .catch(err => err);

    return data;
}





