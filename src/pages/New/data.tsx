import { axios_API_Instance } from "../../services/constants";

export interface Item {
  id: string;
  content: string;
  image: string;
  link : string
}

export const fetchData = async (): Promise<Item[]> => {
  try {
    const response = await axios_API_Instance.get('/news');
    const data = response.data;
    // console.log('Data from API:', data);
    return data.map((item: { _id: { toString: () => string }; content: string; image: string ;link : string}) => ({
      id: item._id.toString(),
      content: item.content,
      image: item.image,
      link: item.link,
    }));
  } catch (error) {
    console.error('Fetch data error:', error);
    throw error;
  }
};

export const loadData = async () => {
  try {
    const data = await fetchData();
    // console.log('Data:', data);
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

export const init = async () => {
  await loadData();
};

export const fetchDataAndExport: () => Promise<Item[]> = fetchData;
