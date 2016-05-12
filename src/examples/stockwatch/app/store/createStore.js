

import { createStore as reduxCreateStore } from 'redux';

import { reducer } from './reducer/reducer';

export const createStore = () => {
    const store = reduxCreateStore(
      reducer,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    return store;
};
