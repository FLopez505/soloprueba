import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import firebase from 'react-native-firebase';

const LogIn = (props) => {


    const { cambiarPantallas, handleCorreo,handlePass,login,signup} = props;

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
        <ImageBackground source={require('../assets/fondo3.jpg')} style={styles.image}>
          <View style={styles.center}>
            <View style={styles.body}>
              <ScrollView>
                <View>
                  <View style={styles.center}>
                    <Image style={styles.logo} source={require('../assets/logo.png')}/>
                  </View>
                  <View >
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.text}>Ingrese sus datos para inciar sesión.</Text>
                    <Text style={styles.textSubTitle}></Text>
                  </View>
                  <View style={styles.center}>
                    <TextInput onChangeText={handleCorreo} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Usuario'></TextInput>
                    <TextInput onChangeText={handlePass} placeholderTextColor="white" secureTextEntry={true} style={styles.textInput} placeholder='Contraseña'></TextInput>
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight onPress={signup} style={[styles.buttonContainer, styles.logInButton]}>
                    <Text style={styles.signUpText}>Ingresar</Text>
                  </TouchableHighlight>
                </View>
                <Text style={styles.textContainer}>Ingresar con <Text style={styles.text2}>Google</Text>   |   <Text /*onPress={cambiarPantallas}*/ style={styles.text2}>Registrarse</Text></Text>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </>
    );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    borderRadius:20,
  },
  logInButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 30,
    color: 'white',
    width: 300,
    textAlign: 'center'
  },
  text: {
    fontSize: 16, 
    color: '#eee',
    textAlign: 'center',
  },
  text2: {
    fontSize: 12, 
    color: '#9ed4a3',
    textAlign: 'center',
  },
  textContainer: {
    fontSize: 12, 
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  textSubTitle: {
    fontSize: 16, 
    textAlign: 'justify', 
    color: 'rgba(255, 255, 255, .4)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  body: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    width: '100%',
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 125,
    marginTop: 50
  }
});

export default LogIn;
