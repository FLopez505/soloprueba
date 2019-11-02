import React, { Component } from 'react';

import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import ContenedorSignUp from '../SignUp/ContenedorSignUp';
import Opciones from '../Opciones/Opciones';
import CaracterizacionSitio from '../Opciones/CaracterizacionSitio/CaracterizacionSitio';
import Clima from '../Opciones/CaracterizacionSitio/Clima/Clima';
import Suelo from '../Opciones/CaracterizacionSitio/Suelo/Suelo';
import Agua from '../Opciones/CaracterizacionSitio/Agua/Agua';

import firebase from 'react-native-firebase'
//import firebase from 'react-native-firebase/auth'
//import firebase from 'react-native-firebase/database'


export default class ContenedorApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      vistualActual: 'LogIn',
      pickerSelection: 'Ocupación',
      pickerDisplayed: false,
      correo:'',
      contrasena:'',
      respuesta:''
    }

  }

  //obteniendo el correo del input del formulario de LogIn
  handleCorreo = (email) => {
    this.setState({
      correo:email
    });
  
  }
  //Obteniendo el correo del input del formulario de LogIn
  handlePass = (pass) => {
    this.setState({
      contrasena:pass
    });
  }

  //Esta función asíncrona crea un usuario con correo y contraseña
  async signup(){
    try{
      await firebase.auth().createUserWithEmailAndPassword(this.correo,this.contrasena)
      this.setState({
        respuesta:'la cuenta se ha creado correctamente'
      })
      setTimeout(() => {
        this.props.navigator.push({
          id:'Opciones'
        })
      })

    }catch(err){
     // this.setState({
       // respuesta:err
      //})
    }
  }

  //Esta función asíncrona verifica la autenticación del usuario con correo y contraseña
   login(){
    try {
       firebase.auth().signInWithEmailAndPassword(this.state.correo,this.state.contrasena)
      this.setState({
        respuesta:'El usuario se ha logueado correctamente'
      })
      setTimeout(() =>{
        this.props.navigator.push({
          id:'Opciones'
        })
      })
      
    } catch (error) {
      this.setState({
        respuesta: err
      })  
    }
  }

  //Esta función modifica el el valor del estado del elemento seleccionado
  //Y tambien cierra el modal al llamar la función togglePicker
  setPickerValue = (newValue) =>{
    this.setState({
      pickerSelection: newValue
    })
    this.togglePicker();
  }

  cambiarPantalla = () =>{
   const { vistualActual } = this.state;

    (vistualActual==='LogIn')?
    this.setState({
      vistualActual:'SignUp',
    }) :
    this.setState({
      vistualActual:'LogIn'
    });
  }

  //Esta función cambia el estado del modal
  togglePicker = () => {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const {vistualActual, pickerDisplayed, pickerSelection} = this.state;
    
    //Valores que se cargan en el modal
    const pickerValues = [
      {
        title: 'Estudiante',
        value: 'Estudiante'
      },
      {
        title: 'Docente',
        value: 'Docente'
      },
      {
        title: 'Productor',
        value: 'Productor'
      }
    ]

    switch (vistualActual) {
      case 'LogIn':
          return(
            <LogIn 
            handleCorreo={this.handleCorreo}
            handlePass={this.handlePass}
            login={this.login}
            signup={this.signup}
            cambiarPantallas={this.cambiarPantalla}/>
          );
        break;
      
      case 'SignUp':
            return(
              <SignUp 
              pickerDisplayed={pickerDisplayed}
              pickerValues={pickerValues}
              togglePicker={this.togglePicker}
              setPickerValue={this.setPickerValue}
              pickerSelection={pickerSelection}
              />
            );
          break;
      default:
        break;
    }
  }

}