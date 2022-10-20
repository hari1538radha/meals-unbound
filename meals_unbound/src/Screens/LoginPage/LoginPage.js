import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
 import styles from './styles';
import Lottie from 'lottie-react-native';


import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(user => {
        console.log(user);
        if (user) navigation.navigate('DashBoardPage');
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') setErrortext(error.message);
        else if (error.code === 'auth/user-not-found')
          setErrortext('No User Found');
        else {
          setErrortext('Please check your email id or password');
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignContent: 'center',}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.signupPage}>
        <Lottie
        source={require('../../Assets/lf30_editor_0ud81645.json')}
        autoPlay
        loop
        style={styles.SigupPageAnime}
      />
      <Text style={styles.signupHeader}>Let's you in</Text>
          <KeyboardAvoidingView enabled>
            <View >
              <TextInput
                 style={styles.input}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email"
              />
            </View>
            <View  style={styles.signupPages}>
              <TextInput
                 style={styles.input}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                ref={passwordInputRef}
              />
               <TouchableOpacity activeOpacity={0.5} onPress={handleSubmitPress}>
              <Text style={styles.siginbtn}>LOGIN</Text>
            </TouchableOpacity>
            {errortext != '' ? <Text> {errortext} </Text> : null}
      <Text style={styles.or}>or</Text>

            <TouchableOpacity style={styles.googleSignUpBtn}>
        <Text style={styles.signupBtnText}>Continue with Google</Text>
        <Image
          source={require('../../Assets/googlelogo.png')}
          style={styles.googleLogo}></Image>
      </TouchableOpacity>

           
            <Text onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.sigin} >
              New Here ? Register
            </Text>
      </View>

          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;
