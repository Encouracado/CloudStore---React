import React from 'react'
import { FiCodepen } from 'react-icons/fi'
import { Button } from 'reactstrap'
import NavbarComponent from '.././components/NavBar'

const PequenasEmpresas: React.FC = (props) => {

    return (
        <>
           <NavbarComponent title="Best Cloud" link1="PESSOAL" link2="PEQUENAS EMPRESAS" link3="GRANDES EMPRESAS" />
            <div className="body">
                <div className="product-panel">
                    <form >
                        <h1 className="icon-product"><FiCodepen></FiCodepen></h1>
                        <h2 className="product-title">Pequenas Empresas</h2>
                        <h5 className="pricing-product" >R$ 50,00 por mês</h5>
                        <ul className="text-product">
                            <li> <span className="check-letter">✓</span> Lorem ipsum dolor sit amet. </li>
                            <li> <span className="check-letter">✓</span> Lorem ipsum tempor tortor habitasse neque, aliquam pretium lacinia sollicitudin tempus, congue orci vivamus aenean. </li>
                            <li> <span className="check-letter">✓</span> Lorem ipsum dictum risus tempus fames, metus vulputate dui turpis. </li>
                            <li> <span className="check-letter">✓</span> Lorem ipsum dictum risus tempus fames, metus vulputate dui turpis. </li>
                        </ul>
                        <span className="buy-button"><Button type="submit" outline color="primary" >ADQUIRIR</Button>{' '}</span>
                    </form>

                </div>
            </div>
        </>

    )

}

export default PequenasEmpresas;