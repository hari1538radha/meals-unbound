import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SigupPageAnime: {
    width: 350,
    height: 350,
    elevation: 10,
  },
  signupHeader: {
    color: 'white',
    fontSize: 35,
  },
  input: {
    elevation: 10,
    height: 40,
    width: 300,
    borderWidth: 1,
    marginTop: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 20,
    borderColor: 'white',
  },
  
  signupPage: {
    backgroundColor: '#212623',
     flex: 1,
     alignItems: 'center',
   },
   signupPages: {
    backgroundColor: '#212623',
     flex:0,
     justifyContent:"center",
     alignItems: 'center',
   },
   googleSignUpBtn: {
    backgroundColor: '#494b4a',
    elevation: 10,
    flexDirection: 'row',
    width: 300,
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  signupBtnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingRight: 10,
  },
  googleLogo: {
    width: 27,
    height: 27,
  },
  signinContainer:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"

  },
  sigin:{
    color:"white",
    paddingRight:10,
    marginTop:35,
 },
 siginbtn:{
    color:"black",
    padding:7,
    marginTop:15,
    width:100,
    borderRadius:5,
    textAlign:"center",
    backgroundColor:"#d5dce3"

 },
   
 or: {
  color: 'white',
  fontSize: 22,
  paddingTop: 25,
},
  });

 export default styles; 