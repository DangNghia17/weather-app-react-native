import React, { useState } from "react";
import { AppRegistry, Image, StyleSheet, Text, View, } from "react-native";

import { Attractions } from "./data";
import styles from "./styles"
const Plances = () => {
  const [attractions, setAttractions] = useState(Attractions);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hanoi, Vietnam</Text>
      <View style={styles.attractionsList}>
        {attractions.map((attraction, index) => (
          <View key={index} style={styles.attraction}>
            <Image source={attraction.image} style={styles.image} />
            <Text style={styles.name}>{attraction.name}</Text>
            <Text style={styles.location} >{attraction.location}</Text>
            <Image source={attraction.rate} style={styles.rate} />

          </View>
        ))}
      </View>
    </View>
  );
};



export default Plances
