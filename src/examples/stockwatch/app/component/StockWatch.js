

import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actionCreators';

import { FlexCenter } from './Containers';
import { StockSearch } from './StockSearch';
import { WatchList } from './WatchList';

export const createStockWatch = (store) => {
    const actions = bindActionCreators(actionCreators, store.dispatch);

    return React.createClass({

        getInitialState() {
            return store.getState();
        },

        componentDidMount() {
            store.subscribe( () => {
                this.setState({...store.getState()});
            });
        },

        render() {
            return (
                <FlexCenter>
                    <div style={{width: 400}}>
                        <StockSearch {...actions} searchResults={this.state.searchResults}/>
                        <WatchList {...actions} isLiveFeed={this.state.isLiveFeed}
                                watchlist={this.state.watchlist} />
                    </div>
                </FlexCenter>
            );
        }

    });
};
