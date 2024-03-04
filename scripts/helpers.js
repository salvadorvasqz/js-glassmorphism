//transform hex code to rgb values
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

//update div result styles
export const updateDivResultStyles = (
  div,
  opacity,
  color,
  blur,
  borderRadius,
  borderOpacity
) => {
  const rbgColor = hexToRgb(color);
  //set background color and opacity
  div.style.backgroundColor = `rgba(${rbgColor.r}, ${rbgColor.g}, ${rbgColor.b}, ${opacity})`;

  //set border color and opacity
  div.style[
    'border'
  ] = `1px solid rgba(${rbgColor.r}, ${rbgColor.g}, ${rbgColor.b}, ${borderOpacity})`;

  //set border radius
  div.style.borderRadius = `${borderRadius}px`;

  //set blur
  div.style['-webkit-backdrop-filter'] = `blur(${blur}px)`;
  div.style['backdrop-filter'] = `blur(${blur}px)`;
};

//generate css code
export const generateCssCode = (
  opacity,
  color,
  blur,
  borderRadius,
  borderOpacity
) => {
  let innerText = '';
  const rbgColor = hexToRgb(color);
  //background color
  innerText += `background: rgba(${rbgColor.r}, ${rbgColor.g}, ${rbgColor.b}, ${opacity});`;
  //border radius
  innerText += `\nborder-radius: ${borderRadius}px;`;
  //blur
  innerText += `\nbackdrop-filter: blur(${blur}px);`;
  innerText += `\n-webkit-backdrop-filter: blur(${blur}px);`;
  //border opacity
  innerText += `\nborder: 1px solid rgba(${rbgColor.r}, ${rbgColor.g}, ${rbgColor.b}, ${borderOpacity});`;
  //return text
  return innerText;
};

//set input range width
export const setInputRangeBackgroundWidth = (input, percentage) => {
  input.style.backgroundSize = `${percentage}% 100%`;
};

//round decimals
export const roundToTwo = (number) => +(Math.round(number + 'e+2') + 'e-2');
