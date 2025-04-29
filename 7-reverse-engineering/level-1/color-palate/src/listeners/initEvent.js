import changeBackgroundHandler from '../handlers/changeBackgroundHandler.js';

const initEvent = () => {
    const container = document.getElementById('user-interface');

    const input = document.createElement('input');
    input.type = 'color';
    input.id = 'color-input';
    input.addEventListener('input', changeBackgroundHandler);
    container.append(input);
};

export default initEvent;
