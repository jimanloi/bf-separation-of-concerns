const searchHandler = (input) => {
    const encoded = encodeURIComponent(input.trim());
    if (encoded) {
        window.open(`https://duckduckgo.com/?q=${encoded}`, '_blank');
    }
};

export default searchHandler;
