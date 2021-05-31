export const set = (name, value) => {dataArray: localStorage.setItem(name, JSON.stringify(value))};
export const get = (name, value) => {
  const dataObject = JSON.parse(localStorage.getItem(name));

  return dataObject || value;
};
