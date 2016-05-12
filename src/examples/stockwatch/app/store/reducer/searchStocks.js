import { UNIVERSE } from './universe';

export const searchStocks = ( state, {searchText} ) => {
    const searchLc = searchText.toLowerCase();

    const results = { searchResults: {
        searchText,
        results: UNIVERSE.filter( stock => {
            const { ticker, company } = stock;
            const tickerLc = ticker.toLowerCase();
            const companyLc = company.toLowerCase();

            if ( tickerLc === searchText ) {
                return true;
            }
            return ticker === searchText ||
                tickerLc.indexOf(searchLc) >= 0 ||
                companyLc.indexOf(searchLc) >= 0;
        })
    }};
    return results;
};
