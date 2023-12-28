import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
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
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
    flex: 1,
    height: 120,

  },
  roundedImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20

  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    color: "white",
    height: 100,
    marginTop: 10
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
});

export default styles
