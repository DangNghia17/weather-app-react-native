import {FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import {Header} from "../Home/styles";

interface Item {
  id: string;
  content: string;
  image: number; // Kiểu dữ liệu cho đường dẫn hình ảnh
}

const data: Item[] = [
  { id: '1',
    content: 'VOV.VN - Thời tiết ngày 23/10, ' +
      'mưa lớn và cảnh báo lốc, sét, mưa đá,' +
      ' gió giật mạnh ở khu vực' +
      ' Trung Bộ; Gió mạnh, sóng lớn và mưa dông trên biển',
    image: require('../../assets/News/new1.jpg')
  },
   { id: '2',
    content: 'VOV.VN - Thời tiết ngày 25/10, ' +
      'khu vực Bắc Bộ có mưa vài nơi; khu vực từ Nam Nghệ An ' +
      'đến Quảng Trị có mưa vừa, mưa to có nơi mưa rất to.',
    image: require('../../assets/News/new2.jpg')
  },
   { id: '3',
    content: 'VOV.VN - Thời tiết ngày 24/10, ở khu vực từ' +
      ' Quảng Bình đến Đà Nẵng có mưa vừa, mưa to, có nơi mưa ' +
      'rất to với lượng mưa phổ biến từ 70-150mm, có nơi trên 200mm.',
    image: require('../../assets/News/new3.jpg')
  },
   { id: '4',
    content: 'VOV.VN - Thời tiết ngày 26/10: ' +
      'Chiều tối ngày 26/10, ở khu vực Tây Nguyên và Nam ' +
      'Bộ có mưa rào và dông rải rác, cục bộ có mưa to với lượng ' +
      'mưa 15-30mm, có nơi trên 70mm.',
    image: require('../../assets/News/new4.jpg')
  },
  { id: '5',
    content: 'VOV.VN - Thời tiết ngày 26/10: ' +
      'Chiều tối ngày 26/10, ở khu vực Tây Nguyên và Nam ' +
      'Bộ có mưa rào và dông rải rác, cục bộ có mưa to với lượng ' +
      'mưa 15-30mm, có nơi trên 70mm.',
    image: require('../../assets/News/new4.jpg')
  },
  { id: '6',
    content: 'VOV.VN - Thời tiết ngày 26/10: ' +
      'Chiều tối ngày 26/10, ở khu vực Tây Nguyên và Nam ' +
      'Bộ có mưa rào và dông rải rác, cục bộ có mưa to với lượng ' +
      'mưa 15-30mm, có nơi trên 70mm.',
    image: require('../../assets/News/new4.jpg')
  },
  { id: '7',
    content: 'VOV.VN - Thời tiết ngày 26/10: ' +
      'Chiều tối ngày 26/10, ở khu vực Tây Nguyên và Nam ' +
      'Bộ có mưa rào và dông rải rác, cục bộ có mưa to với lượng ' +
      'mưa 15-30mm, có nơi trên 70mm.',
    image: require('../../assets/News/new4.jpg')
  },

];

const NewsPage = () => {
  const renderItem = ({ item }: { item: Item }) => (
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => {}}>
        <SafeAreaView style={styles.itemContainer}>
          <Image source={item.image} style={styles.roundedImage} />
          <View style={styles.contentContainer}>
            <Text numberOfLines={4}>{item.content}</Text>
          </View>
        </SafeAreaView>
        </TouchableOpacity>
      </View>

  );

  return (
    <View style={styles.spaceTop}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  spaceTop: {
    marginTop : 20
  },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 13,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    height: 120,
  },
  roundedImage: {
    width: 100,
    height: 100,
    marginLeft :10,
    marginRight :10,
    borderRadius: 10,
    marginBottom : 20,
    marginTop : 20

  },
  contentContainer: {
    flex: 1,
  },


});

export default NewsPage
