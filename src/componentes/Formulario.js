import React from 'react';
// La forma de utilizar los styles en los modules es importandolas a un objeto
import styles from './Formulario.module.css';

const Formulario = () => {
    return (
        // Combinacion de dos fuentes distintas de estilos 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    {/* Usando styles desde nuestro module */}
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            // Combinacion de dos fuentes distintas de estilos
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;