


export const toggleLiveFeed = (state) => {
    const { isLiveFeed: currentIsLiveFeed } = state;
    return { isLiveFeed: !currentIsLiveFeed };
};
