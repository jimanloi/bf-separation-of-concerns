import createButton from '../components/createButton.js';
import createInput from '../components/createInput.js';
import searchHandler from '../handlers/searchHandler.js';

const initEvent = () => {
    const container = document.getElementById('user-interface');
    const input = createInput();
    const button = createButton();
    container.append(input, button);

    button.addEventListener('click', () => {
        searchHandler(input.value);
    });
};

export default initEvent;
