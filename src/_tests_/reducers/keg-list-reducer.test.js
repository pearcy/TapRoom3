import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

    let action;

    const currentState = {
        1: {
            brand: 'Flying Dog',
            varietal: 'Stout',
            price: 4,
            abv: 3,
            id: 1 },
        2: {
            brand: 'Flying Frog',
            varietal: 'Ale',
            price: 4,
            abv: 3,
            id: 2 }
    }

    const kegData = {
        brand: 'Flying Dog',
        varietal: 'Stout',
        price: 4,
        abv: 3,
        id: 1
    };


    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(kegListReducer({}, { tpe: null })).toEqual({});
    });

    test('Should succesfuly add new keg to masterKegList', () => {
        const { brand, varietal, price, abv, id } = kegData;
        action = {
            type: 'ADD_KEG',
            brand: brand,
            varietal: varietal,
            price: price,
            abv: abv,
            id: id
        };
        expect(kegListReducer({}, action)).toEqual({
            [id] : {
                brand: brand,
                varietal: varietal,
                price: price,
                abv: abv,
                id: id
            }
        });
    });

    test('Should successfuly delete a keg', () => {
        action = {
            type: 'DELETE_KEG',
            id: 1
        };
        expect(kegListReducer(currentState, action)).toEqual({
            2: {
                brand: 'Flying Frog',
                varietal: 'Ale',
                price: 4,
                abv: 3,
                id: 2 }
        });
    });


});




