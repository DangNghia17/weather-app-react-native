import React, { useEffect, useState } from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View,} from "react-native";
import { fetchDataAndExport, Item, init } from "./data";
import styles from "./styles"

init();


const Plances = () => {
  const [plancesData, setPlancesData] = useState<Item[]>([]);

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.roundedImage} />
          <Image source={require('../../assets/Plances/fivestar.png')} style={styles.fiveStar} />
        </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>{item.name}</Text>
            <Text style={styles.contentLocationText}>{item.location}</Text>
          </View>
      </TouchableOpacity>
    </View>
  );


  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDataAndExport();
        setPlancesData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Địa điểm Việt Nam</Text>
      <FlatList
        data={plancesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
    </View>
  );
};



export default Plances
