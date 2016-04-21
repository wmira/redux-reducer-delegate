
/**
 * Checks if its an fsa action -- not checking for error and meta for now
 */
const isSortOfFSA= ( arg ) => arg && arg.type && arg.payload;
const { freeze, keys: objectKeys } = Object;

/**
 * Helper to create mapping of sub reducers
 */
export const createReducersMap = (reducers, keyPrefix) => {
    const keys = objectKeys(reducers);
    const mapping = {};
    const prefix = keyPrefix || '';
    keys.forEach(key => {
        const reducerFunc = reducers[key];
        //reducers can be an object or array
        mapping[typeof key === 'number' ? prefix + reducerFunc.name : key]  = reducerFunc;
    });
};

/**
 * Composes reducers by having its type mapping
 *
 */
export const composeReducer = (reducersMapping = {}) =>
    (state, arg) => {
        const { type } = arg;
        const subReducer = reducersMapping[type];
        if ( subReducer ) {
            var toMerge;
            if ( isSortOfFSA(arg) ) {
                toMerge = subReducer(arg.payload, state);
            } else {
                const { type, ...subArg } = arg; //eslint-disable-line
                toMerge = subReducer(subArg, state);
            }
            //if we have something
            if ( toMerge ) {
                return freeze({ ...state, ...toMerge });
            }
        }
        return state;
    };
