
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
    const isArray = Array.isArray(reducers); //reducers can be an object or array

    keys.forEach(key => {
        const reducerFunc = reducers[isArray ? parseInt(key) : key];
        mapping[prefix + ( isArray === true? reducerFunc.name :  key )]  = reducerFunc;
    });
    return mapping;
};

/**
 * Composes reducers by having its type mapping
 *
 */
export const createReducerDelegate = (reducersMapping = {} , initialState ) =>
    (state = initialState, arg) => {
        const { type, ...subArg } = arg;
        const subReducer = reducersMapping[type];
        if ( subReducer ) {
            var toMerge;
            if ( isSortOfFSA(arg) ) {
                toMerge = subReducer( state, arg.payload || {} );
            } else {
                //const { type, ...subArg } = arg; //eslint-disable-line
                //console.log('sub arg', subArg);
                toMerge = subReducer( state, subArg || {} );
            }
            //if we have something
            if ( toMerge ) {
                return freeze({ ...state, ...toMerge });
            }
        }

        return state;
    };


export default { createReducersMap, createReducerDelegate };
