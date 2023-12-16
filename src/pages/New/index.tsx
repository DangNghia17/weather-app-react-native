import {FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import thư viện axios
import styles from "./styles";
import {Item} from "./data";

// ... Import các thư viện khác

const News = () => {
  const [newsData, setNewsData] = useState<Item[]>([]);

  const renderItem = ({ item }: { item: Item }) => {
    if (item.content.trim() !== '') {
      const link = item.link.includes("http://") || item.link.includes("https://") ? item.link : `https://vov.vn${item.link}`;
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <SafeAreaView style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.roundedImage} />
              <View style={styles.contentContainer}>
                <Text numberOfLines={5} style={styles.contentText}>{item.content}</Text>
              </View>
            </SafeAreaView>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.18:3000/api/news');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bản tin</Text>

      <FlatList
        data={newsData}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />

    </View>
  );
};

export default News;
