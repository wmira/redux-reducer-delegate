import should from 'should';
import { addToWatchList } from '../../../app/store/reducer/addToWatchList';

describe('addToWatchList', () => {
    var currentState = { watchlist: [] };

    it('adds ticker to watchlist', () => {
        const partial = addToWatchList(currentState, {ticker: 'AAPL'});
        should( currentState.watchlist !== partial.watchlist ).be.exactly(true);
        should(partial.watchlist).be.ok();
        should(partial.watchlist.length).be.exactly(1);
        should(partial.watchlist[0].ticker).be.exactly('AAPL');
    });

    it('resets searchText when adding', () => {
        const partial = addToWatchList(currentState, {ticker: 'AAPL'});
        const { searchResults } = partial;
        should(searchResults).be.ok();
        should(searchResults.searchText).be.exactly('');
    });
});
