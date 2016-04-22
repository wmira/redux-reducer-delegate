
import should from 'should';

import { createReducersMap, createReducerDelegate } from '../src';


describe('composeReducer', () => {

    describe('createReducersMap', () => {

        it('creates a mapping based on function names - using array', () => {
            const func1 = function type1() {
                return undefined;
            };
            const func2 = function anotherType() {
                return undefined;
            };
            const mapping = createReducersMap([func1, func2]);

            should(Object.keys(mapping).length).be.exactly(2);
            should(mapping).have.property('type1');
            should(mapping).have.property('anotherType');
        });

        it('creates a mapping based on function names - using map', () => {
            const premap = { actionType1: () => {}, actionType2: () => {} };

            const mapping = createReducersMap(premap,'MYGROUP/');

            should(Object.keys(mapping).length).be.exactly(2);
            should(mapping).have.property('MYGROUP/actionType1');
            should(mapping).have.property('MYGROUP/actionType2');
        });

    });

    describe.only('createReducerDelegate', () => {
        it('reduces basic functions' , () => {
            const subr = function incr( state, { incr = 1 } ) {
                const { count } = state;
                return { count: count + incr };
            };
            const decr = function decr( state, { decr = 1 } ) {
                const { count } = state;
                return { count: count - decr };
            };
            const reducer = createReducerDelegate(createReducersMap([subr,decr]));
            var state = { count: 0 };
            state = reducer(state, { type: 'incr' } );
            should(state.count).be.exactly(1);

            state = reducer(state, { type: 'incr' } );
            should(state.count).be.exactly(2);

            state = reducer(state, { type: 'decr' } );
            should(state.count).be.exactly(1);

            //with parametr
            state = reducer(state, { type: 'incr', incr: 2 } );
            should(state.count).be.exactly(3);

            state = reducer(state, { type: 'decr',  decr: 3 } );
            should(state.count).be.exactly(0);
        });

        it('returns initial state' , () => {
            const reducer = createReducerDelegate({ sample: () =>{} }, { init: 0 } );
            const newState = reducer(undefined, { type: 'UNKNOWN' });
            should(newState.init).be.exactly(0);
        });

    });

});
