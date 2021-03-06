import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image, SafeAreaView,  AsyncStorage } from "react-native";


export default class CreateAccountForm extends Component {
    
    state = {
        user: {
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        }
    }
    

    signUpAlertMessage() {
        if (this.props.signUpSuccess){
            return<Text style={styles.successMsg}>Sign up successful</Text>
            
        } else { 
            return<Text style={styles.errMsg}>try again</Text>
        }}
        
        render() {
        return (
            <SafeAreaView style={styles.createFormContainer}>
                <Image style= { styles.backgroundImage }
                    source={require('../../assets/bgsignup3.jpg')}
                /> 
                <View style={styles.titleContainer}>
                    <Text style={styles.createTitle}>REGISTER</Text>
                </View>
                <StatusBar
                    barStyle="light-content"
                    />
                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    secureTextEntry
                    maxLength={12}
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />
                <TextInput
                    placeholder="Firstname"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(text) => this.setState({firstname: text})}
                    value={this.state.firstname}
                    />
                <TextInput
                    placeholder="Lastname"
                    placeholderTextColor="#142850"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    style={styles.input}
                    onChangeText={(text) => this.setState({lastname: text})}
                    value={this.state.lastname}
                    />
                <View style={styles.allButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress = {() => {this.onSubmit(this.state)}}
                        >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    {this.props.signUpSuccess !== null ? this.signUpAlertMessage() : null}
                </View>
            </SafeAreaView>
        )
    }
    onSubmit(newUser){
        this.props.signUpUsers(newUser, this.props.navigation)
    }
}

const styles = StyleSheet.create({
    createFormContainer: {
        padding: 30,
        flex: 1
    },

    input: {
        alignItems: 'center',
        height: 40,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        color: '#142850',
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    buttonContainer: {
        backgroundColor: '#27496d',
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
    },

    buttonText: {
        textAlign: 'center',
        color: '#dae1e7',
        fontWeight: '700',
    },
    createTitle: {
        fontWeight: '500',
        color: '#142850',
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 25
    },

    titleContainer: {
        alignItems: 'center'
    },

    successMsg: {
        color: 'green',
    },

    errMsg: {
        color: 'red',
    },

    backgroundImage:{
        position: 'absolute',
        width: 400,
        height: '150%',
        alignItems: 'center',
        opacity: 0.3
    },
})