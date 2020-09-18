import kegListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducerr', () => {
    test('Should return default state if ther is no action type passed into the reducer', () => {
        expect(ticketListReducer({}, { tpe: null })).toEqual({});
    });
});

