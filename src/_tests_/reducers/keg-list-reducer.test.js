import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
    test('Should return default state if ther is no action type passed into the reducer', () => {
        expect(kegListReducer({}, { tpe: null })).toEqual({});
    });
});

