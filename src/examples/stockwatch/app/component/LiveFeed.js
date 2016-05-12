
import React, { PropTypes } from 'react';
import { createFeed } from '../datasource/livefeed';
import { Stock } from './WatchList';
//Turns Stock to a LiveFeed
export const LiveFeed = React.createClass({

    propTypes: {
        stock: PropTypes.object,
        children: PropTypes.node
    },

    getInitialState() {
        return { last: this.props.stock.price };
    },

    componentDidMount() {

        const feed = createFeed(this.props.stock);
        this.subscription = feed.subscribe( price => {
            this.setState({...price});
        });
    },

    componentWillUnmount() {
        this.subscription.dispose();
    },

    render() {
        return <Stock {...this.state} {...this.props} />;
    }
});
