// styledHelper
export const columnPadding = (show: number, columns: number) => {
  return show !== 1000 ? show < columns ? show * 52 : (show % columns) * 52 : 0;
};
export const stringPadding = (show: number, columns: number, strings: number) => {
    return show !== 1000 ? Math.floor(show / columns) * 52 >= strings * 52 ? 0 : Math.floor(show / columns) * 52 : 0
}
