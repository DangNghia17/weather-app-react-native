// export
// interface Item {
//   id: string;
//   content: string;
//   image: number;
// }
//
// export const data: Item[] = [
//   { id: '1',
//     content: 'VOV.VN - Thời tiết ngày 23/10, ' +
//       'mưa lớn và cảnh báo lốc, sét, mưa đá,' +
//       ' gió giật mạnh ở khu vực' +
//       ' Trung Bộ; Gió mạnh, sóng lớn và mưa dông trên biển',
//     image: require('../../assets/News/new1.jpg')
//   },
//   { id: '2',
//     content: 'VOV.VN - Thời tiết ngày 25/10, ' +
//       'khu vực Bắc Bộ có mưa vài nơi; khu vực từ Nam Nghệ An ' +
//       'đến Quảng Trị có mưa vừa, mưa to có nơi mưa rất to.',
//     image: require('../../assets/News/new2.jpg')
//   },
//   { id: '3',
//     content: 'VOV.VN - Thời tiết ngày 24/10, ở khu vực từ' +
//       ' Quảng Bình đến Đà Nẵng có mưa vừa, mưa to, có nơi mưa ' +
//       'rất to với lượng mưa phổ biến từ 70-150mm, có nơi trên 200mm.',
//     image: require('../../assets/News/new3.jpg')
//   },
//   { id: '4',
//     content: 'VOV.VN - Thời tiết ngày 27/10, khu vực Bắc Bộ, đêm có mưa vài nơi, ngày nắng. Chiều tối và đêm 27, ngày 28/10 có mưa rào và dông rải rác, riêng vùng núi cục bộ có mưa vừa, mưa to.',
//     image: require('../../assets/News/new4.jpg')
//   },
//   { id: '5',
//     content: 'VOV.VN - Thời tiết ngày 26/10: ' +
//       'Chiều tối ngày 26/10, ở khu vực Tây Nguyên và Nam ' +
//       'Bộ có mưa rào và dông rải rác, cục bộ có mưa to với lượng ' +
//       'mưa 15-30mm, có nơi trên 70mm.',
//     image: require('../../assets/News/new5.jpg')
//   },
//   { id: '6',
//     content: 'VOV.VN - Thời tiết hôm nay 22/10, Hà Nội nhiều mây, không mưa, trưa chiều giảm mây trời nắng. Gió đông bắc cấp 2-3. Sáng sớm và đêm trời lạnh. Nhiệt độ thấp nhất: 21-23 độ. Nhiệt độ cao nhất: 27-29 độ.',
//     image: require('../../assets/News/new6.jpg')
//   },
//   { id: '7',
//     content: 'VOV.VN - Thời tiết ngày 20/10, khu vực Bắc Bộ và Bắc Trung Bộ trời lạnh về đêm và sáng, vùng núi phía Bắc đêm và sáng sớm trời rét.',
//     image: require('../../assets/News/new7.jpg')
//   },
//   { id: '8',
//     content: 'VOV.VN - Thời tiết ngày 17/9: ' +
//       'VOV.VN - Để hạ mực nước hồ, tạo dung tích phòng lũ chủ động, Thừa Thiên Huế sẽ điều chỉnh tăng lưu lượng vận hành điều tiết hồ chứa thủy điện Bình Điền và Hương Điền.',
//     image: require('../../assets/News/new8.jpg')
//   },
//   { id: '10',
//     content: 'VOV.VN - Thời tiết ngày 26/10: ' +
//       'VOV.VN - Trong ngày 21-22/10, ở khu vực Bắc Bộ và Bắc Trung Bộ đêm và sáng trời lạnh, vùng núi phía Bắc có nơi trời rét. Trong đợt không khí lạnh này nhiệt độ thấp nhất ở Bắc Bộ và Bắc Trung Bộ phổ biến từ 19-22 độ, riêng khu vực vùng núi Bắc Bộ phổ biến 16-19 độ, vùng núi cao có nơi dưới 14 độ.',
//     image: require('../../assets/News/new10.jpg')
//   },
//   { id: '11',
//     content: 'VOV.VN - Lúc 7h sáng nay (24/10), Ban Chỉ huy Phòng chống thiên tai và Tìm kiếm cứu nạn tỉnh Thừa Thiên Huế ban hành Lệnh vận hành điều chỉnh tăng lưu lượng điều tiết hồ chứa thuỷ điện Hương Điền.',
//     image: require('../../assets/News/new11.jpg')
//   },
//   { id: '12',
//     content: 'VOV.VN - Thời tiết ngày 26/10: ' +
//       'Chiều tối ngày 26/10, ở khu vực Tây Nguyên và Nam ' +
//       'Bộ có mưa rào và dông rải rác, cục bộ có mưa to với lượng ' +
//       'mưa 15-30mm, có nơi trên 70mm.',
//     image: require('../../assets/News/new12.jpg')
//   },
//
// ];



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
    console.log('Data:', data);
    // Xử lý dữ liệu tại đây
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

export const init = async () => {
  await loadData();
};

export const fetchDataAndExport: () => Promise<Item[]> = fetchData;
