const changeBackgroundHandler = (e) => {
    const newColor = e.target.value;
    document.body.style.backgroundColor = newColor;
};

export default changeBackgroundHandler;
