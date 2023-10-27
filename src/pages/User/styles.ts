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
    backgroundColor: "#00A9FF"

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
    borderColor: "red"

  },
 

  button2: {
    margin: 30,
    height: 50,
    top:20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue"
  },

  buttonText1:{
    color: "red",
    left:108,
    top: 13,
    fontWeight: "bold",

  },
  buttonText2:{
    color: "blue",
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

  },

});

export default styles;