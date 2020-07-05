import React from 'react';
// La forma de utilizar los styles en los modules es importandolas a un objeto
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    // Creando opciones 
    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnologia'}
    ]

    // Utilizando custom hook
    const [ categoria, SelectNoticias ] = useSelect('science', OPCIONES);

    return (
        // Combinacion de dos fuentes distintas de estilos 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    {/* Usando styles desde nuestro module */}
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias />

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