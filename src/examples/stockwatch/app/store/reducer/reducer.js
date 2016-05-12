
import { createReducerDelegate } from 'redux-reducer-delegate';

import { removeFromWatchList } from './removeFromWatchList';
import { toggleLiveFeed } from './toggleLiveFeed';
import { addToWatchList } from './addToWatchList';
import { searchStocks } from './searchStocks';

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const SEARCH_STOCKS = 'SEARCH_STOCKS';
export const TOGGLE_LIVE_FEED = 'TOGGLE_LIVE_FEED';




export const reducer = createReducerDelegate({
    [SEARCH_STOCKS]: searchStocks,
    [ADD_TO_WATCHLIST]: addToWatchList,
    [TOGGLE_LIVE_FEED]: toggleLiveFeed,
    [REMOVE_FROM_WATCHLIST]: removeFromWatchList
}, { watchlist: [] } );
