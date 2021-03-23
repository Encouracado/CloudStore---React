import React from 'react';
import { Button } from 'reactstrap';
import NavbarComponent from '.././components/NavBar'
import { FiCpu, FiCodepen, FiCodesandbox } from 'react-icons/fi'
import {NavLink, Redirect, Link} from 'react-router-dom';
import './style.css'

//<NavbarComponente title="Loja Fire Games" link1="Link1" link2="link2" options="Options" options1="Options1" options2="Options2" reset="reset"/>


interface HomeProps {
    button1: String;
    subititle?: String;
    // O ponto de interrogacao informa que a propriedade é opcional
    button2: String;
    button3: String;
}
//React.FC tipa o tipo de propriedade que deve vir
const Home: React.FC<HomeProps> = (props) => {

    const PageBuy = function () {
        console.log("executou");
       <Redirect to="/GrandesEmpresas"></Redirect>
      
    }

    return (

        <>
            <NavbarComponent title="Best Cloud" link1="PESSOAL" link2="PEQUENAS EMPRESAS" link3="GRANDES EMPRESAS" />
            <div className="body">

                <div className="panel">

                    <div className="plan">
                        <p>
                            <h3 className="icons"><FiCpu></FiCpu></h3>
                            <ul>
                                <li className="pricing-header unique-name ">Pessoal</li>
                                <li className="pricing-features">Plano Gratuito</li>
                                <li className="pricing-button"><Link className="Link" to="/Pessoal">COMPRAR</Link></li>
                            </ul>

                        </p>
                    </div>
                    <div className="plan">
                        <p>
                            <h3 className="icons"><FiCodepen></FiCodepen></h3>

                            <ul>
                                <li className="pricing-header">Pequena empresa</li>
                                <li className="pricing-features">R$ 50,00 por mês</li>
                                <li className="pricing-button"><Link className="Link-Principal" to="/PequenasEmpresas">COMPRAR</Link></li>
                            </ul>

                        </p>
                    </div>
                    <div className="plan">
                        <p>
                            <h3 className="icons" ><FiCodesandbox></FiCodesandbox></h3>
                            <ul>
                                <li className="pricing-header">grandes empresas</li>
                                <li className="pricing-features">R$ 200,00 por mês</li>
                                <li className="pricing-button"><Link className="Link" to="/GrandesEmpresas">COMPRAR</Link></li>
                            </ul>

                        </p>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Home;