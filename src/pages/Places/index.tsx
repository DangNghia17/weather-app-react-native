import React, {useEffect, useState} from 'react';
import {FlatList, Image, Linking, Text, TextInput, TouchableOpacity, View, Platform} from "react-native";
import {fetchDataAndExport, Item, init} from "./data";
import styles from "./styles";


init();

const Places = () => {
  const [placesData, setPlacesData] = useState<Item[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const renderItem = ({item}: { item: Item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <View style={styles.heightCardContainer}>
          <Image source={{uri: item.image}} style={styles.roundedImage}/>
          <Image source={require('../../assets/Plances/fivestar.png')} style={styles.fiveStar}/>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentLocationText}>{item.category}</Text>
          <Text style={styles.contentText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const filterPlacesData = () => {
    if (!searchText) {
      return placesData;
    }

    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredData = placesData.filter(item => item.title.toLowerCase().includes(lowerCaseSearchText));

    return filteredData.length > 0 ? filteredData : [{
      id: 'no-results',
      title: 'Không tìm thấy kết quả',
      link: '',
      image: '',
      category: '',
      price: ''
    }];
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDataAndExport();
        setPlacesData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khám phá du lịch</Text>
      <View style={styles.searchContainer}>

        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm theo tiêu đề"
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity>
          <Image source={require('../../assets/microphone-solid.png')} style={styles.searchIcon}/>
        </TouchableOpacity>
      </View>


      <FlatList
        data={filterPlacesData()}
        renderItem={({item}) => renderItem({item})}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
    </View>
  );
};

export default Places;
