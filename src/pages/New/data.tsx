
export interface Item {
  id: string;
  content: string;
  image: string;
}

export const apiUrl = 'http://192.168.1.18:3000/api/news';

export const fetchData = async (): Promise<Item[]> => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.map((item: { _id: { toString: () => string }; content: string; image: string }) => ({
      id: item._id.toString(),
      content: item.content,
      image: item.image,
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
    // Xử lý dữ liệu tại đây
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

export const init = async () => {
  await loadData();
};

export const fetchDataAndExport: () => Promise<Item[]> = fetchData;
