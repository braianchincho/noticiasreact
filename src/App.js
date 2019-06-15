import React , { Component , Fragment } from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias';
import Buscador from './components/Buscador';
import { categorias as categoriasService } from './services/categorias.service'
class App extends Component {
  state = { noticias : [] , categorias : [] }

  componentWillMount(){
    this.iniciarCategorias();
    this.consultarNoticias('general');
  }
  iniciarCategorias(){
    const categorias = categoriasService;
    this.setState({categorias});
    
}
  consultarNoticias = async (categoria) => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=eefcda8ffc1e4243a0e29ef31b800563`
    const respuesta = await fetch(url);
    const respuestaJSON = await respuesta.json();
    const articulos = [...respuestaJSON.articles];
    this.setState({noticias : articulos });
  }
  render() { 
    return ( 
      <Fragment>
        <Header titulo = "Noticias"/>
        <div className = "container white contenedor-noticias">
          <Buscador consultarNoticias = {this.consultarNoticias}
           categorias = {this.state.categorias}/>
          <ListaNoticias noticias = {this.state.noticias} />
        </div>
      </Fragment>
    
     );
  }
}
 
export default App;

