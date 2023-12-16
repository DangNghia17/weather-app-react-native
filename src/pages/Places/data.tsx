import { axios_API_Instance } from "../../services/constants";

export interface Item {
  id: string;
  title: string;
  link: string;
  image: string;
  category: string;
  price: string;
}

export const fetchData = async (): Promise<Item[]> => {
  try {
    const response = await axios_API_Instance.get('/places');
    const data = response.data;
    // console.log('Data from API:', data); // Kiểm tra data ở đây
    return data.map((item: {
      _id: { toString: () => string };
      category: string;
      image: string;
      link: string;
      price: string;
      title: string;
    }) => ({
      id: item._id.toString(),
      title: item.title, // Sử dụng trường title
      link: item.link, // Sử dụng trường link
      image: item.image,
      category: item.category, // Sử dụng trường category
      price: item.price, // Sử dụng trường price
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
