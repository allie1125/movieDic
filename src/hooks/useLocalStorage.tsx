const LOCAL_STORAGE_KEY = "movieDic";

interface IBookmark {
  id: string;
  isBookMarked: boolean;
}

interface IBookmarkList {
  id: string;
  data: IBookmark[];
}

export const getLocalStorageData = () => {
  const data: any = localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(data);
};

export const updateLocalStorageData = (data: IBookmarkList[]) => {
  return window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
