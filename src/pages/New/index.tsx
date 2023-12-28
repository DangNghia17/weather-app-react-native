import React, {useState, useEffect} from 'react';
import {FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fetchDataAndExport, Item, init} from './data';
import styles from './styles';

init();

const News = () => {
  const [newsData, setNewsData] = useState<Item[]>([]);

  const renderItem = ({item}: { item: Item }) => {
    if (item.content.trim() !== '') {
      const link = item.link.includes('http://') || item.link.includes('https://') ? item.link : `https://vov.vn${item.link}`;
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <SafeAreaView style={styles.itemContainer}>
              <Image source={{uri: item.image}} style={styles.roundedImage}/>
              <View style={styles.contentContainer}>
                <Text numberOfLines={5} style={styles.contentText}>
                  {item.content}
                </Text>
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
        renderItem={({item}) => renderItem({item})}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
    </View>
  );
};

export default News;
