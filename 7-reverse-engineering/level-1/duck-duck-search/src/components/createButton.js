const createButton = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'search-button';
    button.innerHTML = 'DuckDuckSearch';
    return button;
};

export default createButton;
