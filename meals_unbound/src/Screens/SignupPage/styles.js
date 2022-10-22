import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SigUpContainer: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: '#212623',
  },
  SigupPageAnime: {
    width: 400,
    height: 400,
    marginTop:25,
    elevation: 0,
  },
  inputName: {
    elevation: 10,
    height: 40,
    width: 300,
    borderWidth: 1,
    marginTop: 75,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 20,
    borderColor: 'white',
  },
  input: {
    elevation: 10,
    height: 40,
    width: 300,
    borderWidth: 1,
    marginTop: 45,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 20,
    borderColor: 'white',
  },
  formContainer: {
    flex: 2,
    backgroundColor: '#212623',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#212623',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  registerBtn: {
    color: 'black',
    padding: 7,
    marginTop: 40,
    width: 100,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#d5dce3',
  },
});

export default styles;
