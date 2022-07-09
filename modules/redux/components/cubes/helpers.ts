// styledHelper
const cubeWidth = 52;
export const columnPadding = (cubeIndex: number, columns: number) => {
  return cubeIndex !== 0.1 ? cubeIndex < columns ? cubeIndex * cubeWidth : (cubeIndex % columns) * cubeWidth : 0;
};
export const stringPadding = (cubeIndex: number, columns: number, strings: number) => {
  const calcDistance = Math.floor(cubeIndex / columns) * cubeWidth;

  return cubeIndex !== 0.1 ? calcDistance >= strings * cubeWidth ? 0 : calcDistance : 0;
};
