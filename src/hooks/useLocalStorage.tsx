import { ISearch } from "types/movie";

const LOCAL_STORAGE_KEY = "movieDic";

export const initLocalStorageData = () => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
    const init = window.localStorage.setItem(LOCAL_STORAGE_KEY, "[]");
    window.location.reload();
    return init;
  }
  return null;
};

export const getLocalStorageData = () => {
  const data: any = localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(data);
};

export const updateLocalStorageData = (data: ISearch[]) => {
  return window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
