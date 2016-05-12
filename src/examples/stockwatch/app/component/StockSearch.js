
import React, { PropTypes } from 'react';
import { Left, Right } from './Containers';

const Stock = (props) => (
    <div className='sw-search-item' onClick={ () => props.addToWatchList(props.stock.ticker)}>
        <Left>{props.stock.ticker}</Left>
        <Right>{props.stock.company}</Right>
    </div>
);
Stock.propTypes = {
    stock: PropTypes.object
};

const StockList = (props) => {
    const { stocks = [], addToWatchList } = props;
    return (
        <div className='sw-search-res'>
            {stocks.map( stock => {
                return <Stock key={stock.ticker} { ...{ addToWatchList, stock } } />;
            })}
        </div>
    );
};

export const StockSearch = React.createClass({
    propTypes: {
        searchText: PropTypes.string,
        searchResults: PropTypes.object,
        searchStocks: PropTypes.func,
        addToWatchList: PropTypes.func
    },
    onChange(e) {
        this.props.searchStocks(e.target.value);
    },


    render() {
        const { searchResults = {}, addToWatchList } = this.props;
        const { searchText, results } = searchResults;
        return (
            <div>
                <input placeHolder={'Search using Ticker or Company Name..'} ref='input' className={'form-control'} type='text' onChange={this.onChange} value={searchText || ''}/>
                { searchText && results.length > 0 ?
                    <StockList addToWatchList={addToWatchList} stocks={results} /> :
                    null
                }
            </div>
        );
    }
});
