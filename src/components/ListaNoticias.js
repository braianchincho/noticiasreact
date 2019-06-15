import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'
const ListaNoticias = (props) => {
    const noticias = props.noticias;
    return ( 
        <div className="row">
            {noticias.map(noticia => 
                <Noticia noticia = {noticia} key = {noticia.url}/>
            )}
        </div>
     );
}
ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}
export default ListaNoticias;