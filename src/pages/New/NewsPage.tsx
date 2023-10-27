import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { fetchDataAndExport, Item, init } from "./data";
import styles from "./styles";

init();

const NewsPage = () => {
  const [newsData, setNewsData] = useState<Item[]>([]);

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => {}}>
        <SafeAreaView style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.roundedImage} />
          <View style={styles.contentContainer}>
            <Text numberOfLines={5} style={styles.contentText}>{item.content}</Text>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDataAndExport();
        setNewsData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bản tin</Text>

      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
    </View>
  );
};

export default NewsPage;
