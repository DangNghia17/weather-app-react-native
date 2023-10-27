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
    left: 205,
    top: 20,
    
  },
  forgottext:{

    color: "#ffff00",
    fontSize: 14,

  },

  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    color: "#fff",

  },
  
  button: {
    width: 250,
    left: 50,
    top:40,


  },
  
  button1: {
    top:70,
    margin: 30,
    height: 50,
  },
  button2: {
    top:15,
    margin: 30,
    height: 50,

  },
  
  or:{
  },
  textor:{
    color: "#fff",
    top: 80,
    left:150,
    fontSize: 16,
    fontWeight: "600",

  },
  signup:{
    flexDirection: "row",
    top: 10,

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
    top: 30, 
    color: "#fff",
    fontWeight: "bold",

  },

});

export default styles;