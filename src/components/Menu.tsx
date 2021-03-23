import React from 'react';

const Menu: React.FC = (props) =>{

    return(
        <div>{props.children}</div>
        // props.children é uma propriedade encontrada em qualquer componente e que traz todas as propriedades 
        // decladaradas nos filhos do componente
    )
}

export default Menu;