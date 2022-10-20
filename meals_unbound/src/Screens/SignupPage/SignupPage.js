import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) return alert('Please fill Name');
    if (!userEmail) return alert('Please fill Email');
    if (!userPassword) return alert('Please fill Address');

    auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(user => {
        console.log('Registration Successful. Please Login to proceed');
        console.log(user);
        if (user) {
          auth()
            .currentUser.updateProfile({
              displayName: userName,
              photoURL: 'https://aboutreact.com/profile.png',
            })
            .then(() => navigation.navigate("LoginScreen"))
            .catch(error => {
              alert(error);
              console.error(error);
            });
            
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          setErrortext('That email address is already in use!');
        } else {
          setErrortext(error.message);
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View>
            <TextInput
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Enter Name"
            />
          </View>
          <View >
            <TextInput
              
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              keyboardType="email-address"
              ref={emailInputRef}
            />
          </View>
          <View>
            <TextInput
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="Enter Password"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          {errortext != '' ? <Text> {errortext} </Text> : null}
          <TouchableOpacity activeOpacity={0.5} onPress={handleSubmitButton}>
            <Text>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;
