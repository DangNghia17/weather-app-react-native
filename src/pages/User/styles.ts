import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",

  },
  body: {
    padding: 20,

  },
  footer: {
    padding: 20,
    alignSelf : "flex-end",
    marginTop: -40,


  },
  form: {
    marginVertical: 10,

  },
  label: {
    fontSize: 16,
    color: "#fff",
    bottom: 5,
    fontWeight: "bold",

  },
  forgot:{
    left: 230,
    top: 20,

  },
  forgottext:{

    color: "#ffff00",
    fontSize: 14,

  },

  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    color: "#fff",
    borderColor: "white"

  },

  button: {
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    top:40,
    backgroundColor: "#00A9FF",
    marginBottom : -30
  },
  buttonText:{
    color: "#fff",
    left:135,
    top: 13,
    fontWeight: "bold",
  },

  button1: {
    top:70,
    margin: 30,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor : "white"
  },


  button2: {
    margin: 30,
    height: 50,
    top:20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor : "#3578E5"

  },

  buttonText1:{
    color: "black",
    left:108,
    top: 13,
    fontWeight: "bold",

  },
  buttonText2:{
    color: "white",
    left:96,
    top: 13,
    fontWeight: "bold",

  },
  or:{
    flexDirection: "row",
    gap: 10,
  },
  textor:{
    color: "#fff",
    top: 80,
    left:65,
    fontSize: 16,
    fontWeight: "600",

  },
  line: {
    top: 92,
    left:65,
    width: 100,
    height: 0.4,
    backgroundColor: "#D0D4CA",
  },
  signup:{
    flexDirection: "row",
    top: 20,
    left: 40,

  },
  textsignup:{
    color:"#ffff00",
    left:105,
    fontSize: 16,
    fontWeight: "bold",

  },
  donthave:{
    color: "#fff",
    left:100,
    fontSize: 16,
    fontWeight: "600",

  },
  copyright: {
    fontSize: 12,
    top: 25,
    color: "#fff",
    fontWeight: "bold",
    textAlign : "right"
  },
  imageGoogle: {
    height : 60,
    width : 60,
    alignSelf : "flex-end",
    marginTop : -27,
    marginRight : 13
  },
 imageFacebook: {
    height : 37,
    width : 37,
    alignSelf : "flex-end",
    marginTop : -14,
    marginRight : 23
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 90,
    overflow: 'hidden',
    width:70,
    height :70,
    alignSelf : "center",
    marginTop : 50
  },
  imageGithub: {
    width: 70,
    height: 70,
    alignSelf : "center"
  }
});

export default styles;
