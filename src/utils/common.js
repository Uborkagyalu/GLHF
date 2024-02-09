export const getBorderHexas = () => {
  const borderHexas = [];
  for (let i = 2; i <= 30; i++) {
    borderHexas.push(i);
  }
  for (let i = 504; i <= 531; i++) {
    borderHexas.push(i);
  }
  for (let i = 1; i <= 473; i += 59) {
    borderHexas.push(i);
    borderHexas.push(i + 30);
  }
  for (let i = 59; i <= 472; i += 59) {
    borderHexas.push(i);
    borderHexas.push(i + 30);
  }
  return borderHexas;
};

export const hexaTL = (i) => i - 30;
export const hexaTR = (i) => i - 29;
export const hexaL = (i) => i - 1;
export const hexaR = (i) => i + 1;
export const hexaBL = (i) => i + 29;
export const hexaBR = (i) => i + 30;
