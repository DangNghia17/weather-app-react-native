import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor : "black",
  },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: 'black',
    shadowColor: 'white',
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
    // height : 170 // Mất chữ location và name thì comment chỗ này
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius : 5,
  },
  roundedImage: {
    width: 150,
    height: 150,
    marginLeft :10,
    marginRight :10,
    borderRadius: 10,
    marginTop : 10

  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    color : "white",
    alignSelf : "flex-end",
    marginRight : 10,
    fontSize : 17 ,
    fontWeight : "900",
    fontStyle : "italic",

  },
  contentLocationText: {
    color : "white",
    alignSelf : "flex-end",
    marginRight : 10,
    fontStyle : "italic",
    marginBottom :20
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  fiveStar: {
    width : 180,
    height : 100,
    alignSelf : "flex-end",
    marginTop : -150,
    marginRight : 15,
    marginBottom : 10
  }

});

export default styles
