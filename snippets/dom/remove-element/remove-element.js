const removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
