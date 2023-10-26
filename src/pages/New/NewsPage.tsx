import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import {data, Item} from "./data";
import styles from "./styles";


const NewsPage = () => {
  const renderItem = ({ item }: { item: Item }) => (
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => {}}>
        <SafeAreaView style={styles.itemContainer}>
          <Image source={item.image} style={styles.roundedImage} />
          <View style={styles.contentContainer}>
            <Text numberOfLines={4} style={styles.contentText}>{item.content}</Text>
          </View>
        </SafeAreaView>
        </TouchableOpacity>
      </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bản tin</Text>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
    </View>
  );
};

export default NewsPage
