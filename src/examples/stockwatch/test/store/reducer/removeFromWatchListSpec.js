import should from 'should';
import { removeFromWatchList } from '../../../app/store/reducer/removeFromWatchList';

describe('removeFromWatchList', () => {
    var currentState = { watchlist: [{ticker: 'AAPL'}, {ticker: 'GOOG'}] };

    it('removes ticker from watchlist', () => {
        const partial = removeFromWatchList(currentState, {ticker: 'AAPL'});
        const {watchlist} = partial;
        should(watchlist !== currentState.watchlist);
        should(watchlist.length).be.exactly(1);
        should(watchlist[0].ticker).be.exactly('GOOG');
    });

});
