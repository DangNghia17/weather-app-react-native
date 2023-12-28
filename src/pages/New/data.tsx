import {axios_API_Instance} from "../../services/constants";

export interface Item {
  id: string;
  content: string;
  image: string;
  link: string;
}

let data: Item[] = [];

export const fetchData = async (): Promise<void> => {
  try {
    const response = await axios_API_Instance.get('/news');
    data = response.data.map((item: { _id: { toString: () => string }; content: string; image: string; link: string }) => ({
      id: item._id.toString(),
      content: item.content,
      image: item.image,
      link: item.link,
    }));
    // console.log('Data from API:', data);
  } catch (error) {
    console.error('Fetch News data error:', error);
    throw error;
  }
};

export const loadData = async (): Promise<void> => {
  try {
    await fetchData();
    // console.log('Data:', data);
  } catch (error) {
    console.error('Error News loading data:', error);
  }
};

export const init = async (): Promise<void> => {
  await loadData();
};

export const fetchDataAndExport: () => Promise<Item[]> = async () => {
  await fetchData();
  return data;
};
