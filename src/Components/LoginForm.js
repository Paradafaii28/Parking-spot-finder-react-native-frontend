import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';

export class Login extends Component {
    render() {
        return (
            <View style={styles.formContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="User or Email"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#142850"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <View style={styles.allButtonContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    formContainer: {
        padding: 30,
      },

    input: {
        alignItems: 'center',
        height: 40,
        backgroundColor: 'rgba(0,255,0,0.2)',
        marginBottom: 10,
        color: '#142850',
        paddingHorizontal: 10
    },

    // allButtonContainer: {
    //     padding: 30,
    // },

    buttonContainer: {
        backgroundColor: 'rgba(0,255,0,0.4)',
        paddingVertical: 13,
        marginBottom: 10,
    },

    buttonText: {
        textAlign: 'center',
        color: '#142850',
        fontWeight: '700',
    }

})

export default Login

