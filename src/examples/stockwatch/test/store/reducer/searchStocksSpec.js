import should from 'should';
import { searchStocks } from '../../../app/store/reducer/searchStocks';

describe('searchStocks', () => {

    it('searches successfully using ticker', () => {
        const partial = searchStocks( {} , {searchText: 'AAPL'} );
        const {searchResults} = partial;
        const { searchText, results } = searchResults;

        should( searchText ).be.exactly('AAPL');
        should( results ).be.ok();
        should( results.length ).be.exactly(1);
        should( results[0].ticker).be.exactly('AAPL');

    });

});
