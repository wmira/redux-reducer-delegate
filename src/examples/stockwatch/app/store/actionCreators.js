
import {
    ADD_TO_WATCHLIST,
    REMOVE_FROM_WATCHLIST,
    SEARCH_STOCKS,
    TOGGLE_LIVE_FEED
} from './reducer/reducer';

export const toggleLiveFeed = () => {
    return { type: TOGGLE_LIVE_FEED };
};

export const addToWatchList = (ticker) => {
    return { type: ADD_TO_WATCHLIST, ticker };
};

export const removeFromWatchList = (ticker) => {
    return { type: REMOVE_FROM_WATCHLIST, ticker };
};

export const searchStocks = (searchText) => {
    return { type: SEARCH_STOCKS, searchText };
};
