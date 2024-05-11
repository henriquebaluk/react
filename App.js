import React, { Componente } from 'react';
import './assets/estilo.css';

import biscoito from './assets/biscoito.png';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ""
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.frases = ['Siga os bons e aprenda com eles', 'o bom-senso vale mais do que muito conhecimento', 'o riso é a menor distância entre duas pessoas', 'Deixe de lado as preocupações e seja feliz', 'realize o óbvio, pemse o improvavel e conquiste o impossivel','acredite em milagres mas nao dependa deles', 'a maior barreira para o sucesso e o medo do fracasso'];
  }
}