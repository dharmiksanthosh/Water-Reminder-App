import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Platform, Keyboard, Modal, ScrollView } from 'react-native';
import firebase from 'firebase';
import Constants from 'expo-constants';
import Header from '../components/Header';
//import db from '../config';

export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            password:'',
            email:'',
            isModalVisible: false,
            first_name: '',
            last_Name: '',
            address: '',
            contact: '',
            comfirmPassword: ''
        }
    }
    showModal = ()=>{
        return(
            <View>
                    <View style={styles.modal}>
                        <ScrollView style={styles.modalScroll}>
                            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.container}>
                                <Text style={styles.modalTitle}>Registration</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"First Name"}
                                    onChangeText={(text)=>{this.setState({first_name:text})}}
                                    maxLength={15}/>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"Last Name"}
                                    onChangeText={(text)=>{this.setState({last_name:text})}}
                                    maxLength={15}/>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"Address"}
                                    onChangeText={(text)=>{this.setState({address:text})}}
                                    multiline={true}/>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"Mobile no"}
                                    onChangeText={(text)=>{this.setState({contact:text})}}
                                    maxLength={10}
                                    keyboardType={'number-pad'}/>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"Email"}
                                    onChangeText={(text)=>{this.setState({email:text})}}
                                    keyboardType={'email-address'}/>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"Password"}
                                    onChangeText={(text)=>{this.setState({password:text})}}
                                    secureTextEntry={true}/>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder={"Confirm password"}
                                    onChangeText={(text)=>{this.setState({confirmPassword:text})}}
                                    secureTextEntry={true}/>
                                <View>
                                    <TouchableOpacity
                                        style={[styles.login,{marginTop:10}]}
                                        onPress={()=>{
                                            this.userSignUp(this.state.email,this.state.password,this.state.confirmPassword)
                                        }}>
                                            <Text style={styles.loginText}>Register</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.login,{marginTop:10,marginBottom:10}]}
                                        onPress={()=>{
                                            this.props.navigation.navigate('Login')
                                        }}>
                                            <Text style={styles.loginText}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
            </View>
        )
    }
    userSignUp = async (email,password,cpassword)=>{
        if (password == cpassword) {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then((response)=>{
                    return Alert.alert('User Added','User Added Succesfully')
                })
                .catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    return Alert.alert(errorMessage)
                })
            db.collection('Users').add({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                address: this.state.address,
                contact: this.state.contact,
                username: this.state.email,
                isBookRequestActive: false,
            })
        } else {
            return Alert.alert('Password does not match')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={[styles.container,{paddingTop:Constants.statusBarHeight}]}>            
                    <View>
                      <View>
                        <Header/>
                      </View>
                      <View style={{alignSelf:'center',margin:20,borderWidth:10,borderColor:'#0f52ba'}}>
                          {this.showModal()}
                      </View>
                    </View>
            </KeyboardAvoidingView>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    login: {
        height:30,
        width:90,
        borderWidth:2,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0080fe',
        alignSelf: 'center'
    },
    modalInput: {
        width:250,
        height:35,
        borderWidth:2,
        borderRadius:10,
        marginHorizontal:15,
        marginBottom:5,
        paddingLeft:10
    },
    modalTitle: {
        fontSize:35,
        fontWeight:'bold',
        alignSelf:'center',
        margin:10
    },
    modalScroll: {
        width:'100%'
    }
  });