import { axios_API_Instance } from "../../services/constants";

export interface Item {
  id: string;
  name: string;
  location: string;
  image: string;
  rate: string;
}

export const fetchData = async (): Promise<Item[]> => {
  try {
    const response = await axios_API_Instance.get('/places');
    const data = response.data;
    // console.log('Data from API:', data);
    return data.map((item: { _id: { toString: () => string }; name: string; location: string; image: string; rate: string }) => ({
      id: item._id.toString(),
      name: item.name,
      location: item.location,
      image: item.image,
      rate: item.rate,
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
