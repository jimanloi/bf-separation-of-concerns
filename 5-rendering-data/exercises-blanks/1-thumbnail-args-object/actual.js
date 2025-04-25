'use strict';

const actual = (argsObj = {}) => {
  const divEl = document.createElement('div');
  divEl.className = 'thumbnail-container';

  const imgEl = document.getElementById('img');
  imgEl.classList = 'thumbnail';
  imgEl.src = argsObj.url;
  imgEl.alt = `the color ${argsObj.color}`;
  divEl.appendChild(imgEl);

  return divEl;
};
