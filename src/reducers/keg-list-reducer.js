export default (state = {}, action) => {
    const { brand, varietal, price, abv, id } = action;
    switch (action.type) {
    case 'ADD_KEG':
        return Object.assign({}, state, {
            [id]: {
                brand: brand,
                varietal: varietal,
                price: price,
                abv: abv,
                id: id
            }
        });
        default:
            return state;
    }
};

