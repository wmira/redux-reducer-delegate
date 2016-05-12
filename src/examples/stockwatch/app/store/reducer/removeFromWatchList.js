
export const removeFromWatchList = (state, {ticker}) => {
    const { watchlist: currentWatchList } = state;
    const index = currentWatchList.findIndex( (stock) => stock.ticker === ticker);

    const result = { watchlist: [
        ...currentWatchList.slice(0, index),
        ...currentWatchList.slice(index + 1)
    ]};
    
    return result;
};
