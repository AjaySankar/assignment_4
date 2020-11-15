import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import logo from '../logo.png';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginRequestHandle from '../network/login';
import RequestStates from '../utils/requestStateEnums';
import User from '../models/User';

const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 4;
const LoginInfoStorageKey = 'InstaPost-LoginInfo';

const loginInfoSchema = yup.object({
  nickname: yup.string().required('Nick name is required').min(1),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(1),
});

const Login = ({navigation}) => {
  const defaultLoginInfo = {
    nickname: '',
    email: '',
    password: '',
  };

  const [initialFormData, setInitFormData] = React.useState(defaultLoginInfo);

  const [requestState, updateRequestState] = React.useState(
    RequestStates.NotRequested,
  );

  const saveUserLoginCredentials = async (loginInfo) => {
    try {
      await AsyncStorage.setItem(
        LoginInfoStorageKey,
        JSON.stringify(loginInfo),
      );
      // Alert.alert('Saved personal info!!');
    } catch (e) {
      Alert.alert('Failed to store personal info!!');
    }
  };

  React.useEffect(() => {
    try {
      AsyncStorage.getItem(LoginInfoStorageKey).then((loginInfo) => {
        setInitFormData({...defaultLoginInfo, ...JSON.parse(loginInfo)});
      });
    } catch {
      Alert('Failed to read saved login credentials');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogin = ({nickname, email, password}, isValid) => {
    if (!isValid) {
      return;
    }
    updateRequestState(RequestStates.RequestInProcess);
    new LoginRequestHandle(updateRequestState)
      .login(email, password)
      .then((response) => {
        // console.log(`Success ${JSON.stringify(response)}`);
        if (response.status) {
          updateRequestState(RequestStates.RequestSuccessful);
          User.updateProfile(nickname, email, password);
          saveUserLoginCredentials({nickname, email, password});
        } else {
          Snackbar.show({
            text: 'Invalid credentials.. Try again',
            duration: Snackbar.LENGTH_LONG,
          });
          updateRequestState(RequestStates.RequestFailed);
        }
      })
      .catch((error) => {
        console.log(`Failed ${JSON.stringify(error)}`);
        updateRequestState(RequestStates.RequestFailed);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.form}>
        <Formik
          enableReinitialize={true}
          initialValues={initialFormData}
          validationSchema={loginInfoSchema}>
          {(props) => (
            <ScrollView>
              <Image source={logo} style={styles.logo} />
              <View>
                <TextInput
                  style={styles.textInput}
                  onChangeText={props.handleChange('nickname')}
                  value={props.values.nickname}
                  placeholder="Nick name"
                  onBlur={props.handleBlur('nickname')}
                />
                <Text style={styles.errorText}>
                  {props.touched.nickname && props.errors.nickname}
                </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  placeholder="Email"
                  onBlur={props.handleBlur('email')}
                />
                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  placeholder="Password"
                  onBlur={props.handleBlur('password')}
                  secureTextEntry={true}
                />
                <Text style={styles.errorText}>
                  {props.touched.password && props.errors.password}
                </Text>
                {requestState === RequestStates.RequestInProcess ? (
                  <ActivityIndicator size="large" color="#3b5998" />
                ) : (
                  <TouchableOpacity
                    style={styles.submitButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => onLogin(props.values, props.isValid)}>
                    <Text style={styles.buttonTextStyle}> Login </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={[
                    styles.submitButtonStyle,
                    {backgroundColor: '#eee', borderColor: '#3b5998'},
                  ]}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={[styles.buttonTextStyle, {color: '#3b5998'}]}>
                    {' '}
                    Register{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#eee',
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    fontFamily: 'Arial',
  },
  errorText: {
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 5,
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButtonStyle: {
    marginVertical: 5,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#3b5998',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
});
