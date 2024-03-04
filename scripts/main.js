import {
  generateCssCode,
  hexToRgb,
  roundToTwo,
  setInputRangeBackgroundWidth,
  updateDivResultStyles,
} from './helpers.js';

//range inputs
const opacityRange = document.querySelector('#opacity-range');
const blurRange = document.querySelector('#blur-range');
const borderRadiusRange = document.querySelector('#border-radius-range');
const borderOpacityRange = document.querySelector('#border-opacity-range');

//color picker
const colorPicker = document.querySelector('#color-picker');

//div result
const divResult = document.querySelector('#div-result');

//css result
const cssResult = document.querySelector('#css-result');

//buttons
const btnCopy = document.querySelector('#btn-copy');

//notification
const notification = document.querySelector('#notification');

//initial values
const maxOpacity = 0.2;
let opacityValue = 0.01;
let opacity = roundToTwo((opacityValue * 100) / maxOpacity);
let color = '#FFFFFF';
const maxBlur = 10; //px
let blurValue = 5; //px
let blur = roundToTwo((blurValue * 100) / maxBlur);
let borderRadius = 10;
let borderOpacity = 0.1;

const showCssResult = () => {
  //code
  const cssCode = generateCssCode(
    opacityValue,
    color,
    blurValue,
    borderRadius,
    borderOpacity
  );
  //set code
  cssResult.innerHTML = cssCode;
};

//update div styles
const updateDivResult = () => {
  updateDivResultStyles(
    divResult,
    opacityValue,
    color,
    blurValue,
    borderRadius,
    borderOpacity
  );
  //show css code
  showCssResult();
};

//initialize controls
(() => {
  colorPicker.value = color;
  opacityRange.value = opacity;
  setInputRangeBackgroundWidth(opacityRange, opacity);
  blurRange.value = blur;
  setInputRangeBackgroundWidth(blurRange, blur);
  borderRadiusRange.value = borderRadius;
  setInputRangeBackgroundWidth(borderRadiusRange, borderRadius);
  borderOpacityRange.value = borderOpacity * 100;
  setInputRangeBackgroundWidth(borderOpacityRange, borderOpacity * 100);
  showCssResult();
  updateDivResult();
})();

//on colorPicker change
colorPicker.addEventListener('input', (e) => {
  color = e.target.value;
  updateDivResult();
});

//on opacityRange change
opacityRange.addEventListener('input', (e) => {
  opacity = e.target.value;
  opacityValue = roundToTwo((opacity * maxOpacity) / 100);
  updateDivResult();
  setInputRangeBackgroundWidth(opacityRange, opacity);
});

//on borderRadiusRange change
borderRadiusRange.addEventListener('input', (e) => {
  borderRadius = e.target.value;
  setInputRangeBackgroundWidth(borderRadiusRange, borderRadius);
  updateDivResult();
});

//on blurRange change
blurRange.addEventListener('input', (e) => {
  blur = e.target.value;
  blurValue = roundToTwo((blur * maxBlur) / 100);
  setInputRangeBackgroundWidth(blurRange, blur);
  updateDivResult();
});

//on borderOpacityRange change
borderOpacityRange.addEventListener('input', (e) => {
  borderOpacity = roundToTwo(e.target.value / 100);
  setInputRangeBackgroundWidth(borderOpacityRange, e.target.value);
  updateDivResult();
});

//on copy clicked
btnCopy.addEventListener('click', () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(cssResult.innerHTML);
  //show notification
  notification.classList.add('notification--show');
  setTimeout(() => {
    //show notification
    notification.classList.remove('notification--show');
  }, 1500);
});
