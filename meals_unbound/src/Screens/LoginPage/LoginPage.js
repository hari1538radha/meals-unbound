import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

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
        <View>
          <KeyboardAvoidingView enabled>
            <View >
              <TextInput
               
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email"
              />
            </View>
            <View>
              <TextInput
                
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                ref={passwordInputRef}
              />
            </View>
            {errortext != '' ? <Text> {errortext} </Text> : null}
            <TouchableOpacity activeOpacity={0.5} onPress={handleSubmitPress}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;
