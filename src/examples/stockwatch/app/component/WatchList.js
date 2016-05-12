
import React, { PropTypes } from 'react';
import { Right, Left } from './Containers';
import { LiveFeed } from './LiveFeed';

export const NOOP = () => undefined;

export const Stock = (props) => {
    const last = props.last || stock.price;
    const prev = props.prev;
    const delta = ( props.delta > 0 ? '+' : '' ) +  ((props.delta || 0).toFixed(2));
    const color = prev === undefined ? '#666' : ( prev < last ? '#1ABC9C' : '#E74C3C' )  ;
    const { stock } = props;

    return (
        <div style={{overflow: 'auto', cursor: 'pointer', padding: 6}}>
            <Left>
                <span className={'stock-remove'} onClick={ () => props.removeFromWatchList(stock.ticker)}><i className='fa fa-remove'/></span>
                <span style={{padding: '0px 4px', color: '#34495E', fontWeight: 'bold'}}>{stock.ticker}</span>
                <span style={{fontSize: 11, color: '#95A5A6' }}> - {stock.company}</span>
            </Left>
            <Right style={{float: 'right'}}>
                <span style={{paddingRight: 6, fontSize: 10, color: '#AAA'}}>{delta}</span>
                <span style={{fontWeight: 'bold', color}}>{(last).toFixed(2)}</span>
            </Right>
        </div>
    );
};
Stock.propTypes = {
    stock: PropTypes.object,
    addToWatchList: PropTypes.func,
    last: PropTypes.number,
    prev: PropTypes.number,
    delta: PropTypes.number
};

const RenderWatchlist = ({watchlist, removeFromWatchList }) => {
    return ( <div className='WatchList'>
      { watchlist.map( stock => {
          return <LiveFeed removeFromWatchList={removeFromWatchList} key={stock.ticker} { ...{stock } }/>;
      })
    }
    </div>);
};

export const WatchList = ( props ) => (
    <div style={{textAlign: 'center', background: '#FFF', marginTop: 30, border: '1px solid #e5e5e5'}}>
        { props.watchlist.length === 0 ? 'Your watchlist is empty.'
            : RenderWatchlist(props)
        }
    </div>
);
WatchList.propTypes = {
    watchlist: PropTypes.array
};
