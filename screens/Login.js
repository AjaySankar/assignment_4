import React from 'react';

import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import logo from '../logo.png';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 4;

const loginInfoSchema = yup.object({
    nickname: yup.string()
        .required('Nick name is required')
        .min(1),
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required')
        .min(1)
});

const Login = () => {
    const defaultLoginInfo = {
        nickname: '',
        email: '',
        password: ''
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.form}>
                <Formik
                    initialValues={defaultLoginInfo}
                    validationSchema={loginInfoSchema}
                >
                    {(props) => (
                        <ScrollView>
                            <Image source={logo} style={styles.logo} />
                            <View>
                                <TextInput
                                style={styles.textInput}
                                onChangeText={props.handleChange('nickname')}
                                value={props.values.nickname}
                                placeholder='Nick name'
                                onBlur={props.handleBlur('nickname')}
                                />
                                <Text style={styles.errorText}>{ props.touched.nickname && props.errors.nickname }</Text>
                                <TextInput
                                style={styles.textInput}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                placeholder='Email'
                                onBlur={props.handleBlur('email')}
                                />
                                <Text style={styles.errorText}>{ props.touched.email && props.errors.email }</Text>
                                <TextInput
                                style={styles.textInput}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                placeholder='Password'
                                onBlur={props.handleBlur('password')}
                                secureTextEntry={true}
                                />
                                <Text style={styles.errorText}>{ props.touched.password && props.errors.password }</Text>
                                <TouchableOpacity
                                    style={styles.submitButtonStyle}
                                    activeOpacity = { .5 }
                                >
                                    <Text style={styles.buttonTextStyle}> Login </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.submitButtonStyle, {backgroundColor: '#eee', borderColor: '#3b5998'}]}
                                    activeOpacity = { .5 }
                                >
                                    <Text style={[styles.buttonTextStyle, {color: '#3b5998'}]}> Register </Text>
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
        backgroundColor: '#eee'
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        fontFamily: 'Arial'
    },
    errorText: {
        marginTop: 5,
        marginLeft: 20,
        marginBottom: 5,
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    submitButtonStyle: {
        marginVertical:5,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:50,
        marginRight:50,
        backgroundColor:'#3b5998',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
    buttonTextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 18
    },
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding:10,
        marginTop:20,
        alignSelf: 'center'
      },
});