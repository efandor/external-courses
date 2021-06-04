export const set = (storageName, data) => ({dataArray: localStorage.setItem(storageName, JSON.stringify(data))});
export const get = (storageName, data) => {
  const dataObject = JSON.parse(localStorage.getItem(storageName));

  return dataObject || data;
};
