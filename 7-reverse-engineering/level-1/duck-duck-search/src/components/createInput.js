const createInput = () => {
    const input = document.createElement('input');
    input.type = 'search';
    input.id = 'query';
    input.class = 'input-field';
    return input;
};

export default createInput;
