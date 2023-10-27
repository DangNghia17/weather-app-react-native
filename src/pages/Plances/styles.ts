import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 25,
    margin: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  attractionsList: {
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    
  },
  attraction: {
    margin: 15,
    alignItems: "center",
    
  },
  image: {
    width: 150,
    height: 120,
    right: 105
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    left: 60,
    position: "absolute",

  },
  location: {
    color: "white",
    fontSize: 16,
    position: "absolute",
    left: 60,
    top: 30,
  },
  rate: {
    position: "absolute",
    left: 55,
    top: 55,
    width:210,
    height: 45,
  },

  

});
export default styles
