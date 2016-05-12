import React from 'react';
import { render } from 'react-dom';
import { createStockWatch } from './component/StockWatch';
import { createStore } from './store/createStore';


const StockWatch = createStockWatch(createStore());
render(<StockWatch />, document.getElementById('app'));
