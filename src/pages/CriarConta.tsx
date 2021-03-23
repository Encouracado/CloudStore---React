import React from 'react'
import NavbarComponent from '../components/NavBar'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import api from "../services/api";


type Inputs = {
    senha: String,
    email: String,
    cpf: Number
};


const CriarConta: React.FC = (props) => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = async (data: any) => {
        await api.post('/localhost:8080/createUser', data)
            .then(function (response) {
                alert(response);
                history.push('/')
            })
            .catch(function (error) {
                alert(error);
            });
    }

    return (
        <>
            <NavbarComponent title="Best Cloud" link1="PESSOAL" link2="PEQUENAS EMPRESAS" link3="GRANDES EMPRESAS" />
            <div className="body">
                <div className="product-panel">
                    
                    <h2 className="Entrar-tag-form">Cadastro</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-floating mb-3">
                        <label htmlFor="email">Email address</label>
                            <input type="email" name="nome" className="form-control" id="email" placeholder="email" ref={register({required: true})} />
                            
                        </div>

                        <div className="form-floating">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="senha" className="form-control" id="password" placeholder="senha" ref={register({required: true})} />
                           
                        </div>
                        <div className="form-floating">
                            <label htmlFor="password">CPF</label>
                            <input type="text" name="cpf" className="form-control" id="cpf" placeholder="cpf" ref={register({required: true})} />                          
                        </div>


                        <div className="login-button">
                            <button type="submit" className="btn btn-block btn-lg btn-primary">CRIAR USUÁRIO</button>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="checked" id="flexCheckDefault" />
                                <label className="form-check-label">
                                    Lembre-se de mim.
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default CriarConta;