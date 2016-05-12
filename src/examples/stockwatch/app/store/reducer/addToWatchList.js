import { UNIVERSE } from './universe';

/**
 * Add the given ticker and then reset the search
 */
export const addToWatchList = ( state, { ticker } ) => {

    const { watchlist: currentWatchlist } = state;
    const stock = UNIVERSE.filter( stock => stock.ticker === ticker );
    return { watchlist: currentWatchlist.concat(stock), searchResults: { searchText: '' }}; //reset search
};
