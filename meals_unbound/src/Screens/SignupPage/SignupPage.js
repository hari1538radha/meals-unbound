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
import Lottie from 'lottie-react-native';
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
            .then(() => navigation.navigate('LoginScreen'))
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
    <SafeAreaView style={{ backgroundColor: 'white'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.mainContainer}>
          <KeyboardAvoidingView enabled>
            <View style={styles.SigUpContainer}>

             
            </View>

            <View style={styles.formContainer}>
              <TextInput
                style={styles.inputName}
                onChangeText={UserName => setUserName(UserName)}
                placeholder="Enter Name"
              />

              <TextInput
                style={styles.input}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email"
                keyboardType="email-address"
                ref={emailInputRef}
              />

              <TextInput
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                style={styles.input}
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={Keyboard.dismiss}
              />

              {errortext != '' ? <Text> {errortext} </Text> : null}
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={handleSubmitButton}
                style={styles.registerBtn}>
                <Text>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen
