import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

    let action:;
    const kegData = {
        brand: 'Flying Dog',
        varietal: 'Stout',
        price: 4,
        abv: 3,
        id: 1
    };

    test('Should succesfuly add new keg to masterTicketList', () => {
        const { brand, varietal, price, abv, id } = kegData;
        action = {
            type: 'ADD_TICKET',
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

    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(kegListReducer({}, { tpe: null })).toEqual({});
    });


});

// brand={keg.brand}
// varietal={keg.varietal}
// price={keg.price}
// abv={keg.abv}
// pintCount={keg.pintCount}
// id={keg.id}
// key={keg.id} />

// — Flying Dog
// — Surly
// — Troegs
// — Dogfish
// — Deschutes
// — New Belgium



