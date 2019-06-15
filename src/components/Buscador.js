import React ,{ Component } from 'react';
import PropTypes from 'prop-types'
class Buscador extends Component {
    state = { categoriaSelect:'' }
   
    cambiarCategoria = (e) => {
        this.props.consultarNoticias(e.target.value);
    }
    render() { 
        const { categorias } = this.props;
        return ( 
            <div className="buscador row">
                <div className = "col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por Categoría</h2>
                        <div className = "input-field col s12">
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                { categorias.map( cat => 
                                    <option value={cat.value} key={cat.value}>
                                        {cat.title}
                                    </option>
                                    ) }
                            </select>
                        </div>
                    </form>
                </div>

            </div>
         );
    }
}
Buscador.propTypes = {
    consultarNoticias : PropTypes.func.isRequired,
    categorias : PropTypes.func.isRequired
}
export default Buscador;