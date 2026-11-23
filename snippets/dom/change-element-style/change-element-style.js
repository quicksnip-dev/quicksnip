const changeElementStyle = (element, styleObj) => {
  Object.entries(styleObj).forEach(([property, value]) => {
    element.style[property] = value;
  });
};
