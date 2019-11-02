import React, {Component} from 'react';
import SignUp from './SignUp';

export default class ContenedorSignUp extends Component{
  constructor(props){
    super(props)
    this.state= {
      valorDepto: '',
      valorOcupacion: ''
    }
  }

  changeDepto = (valorDepto) => {
    this.setState({ valorDepto: valorDepto })
  }

  changeOcupacion = (valorOcupacion) => {
    this.setState({ valorOcupacion: valorOcupacion })
  }

  render(){
    const {valorDepto, valorOcupacion} = this.state
    return(
      <SignUp valorDepto={valorDepto} valorOcupacion={valorOcupacion} changeDepto={this.changeDepto} changeOcupacion={this.changeOcupacion}
      />
    )
  }

}