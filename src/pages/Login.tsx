import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import NavbarComponent from "../components/NavBar";
import { useForm } from "react-hook-form";
import api from "../services/api";
import StoreContext from "../components/Store/Context";

type Inputs = {
  email: string;
  password: string;
};



function login({ email, password }: any) {
  if (email === "admin@gmail.com" && password === "123") {
    return { token: "1234" };
  } else {
    return { error: "usuario invalido" };
  }
}

const Login: React.FC = (props) => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const history = useHistory();
  const { setToken } = useContext(StoreContext);
  const onSubmit = async (data: any) => {
  
    //ainda nao ha api
    /*await api.post('/localhost:8080/login', data)
            .then(function (response) {
                history.push('/')
            })
            .catch(function (error) {
                alert(error);
            });*/
    const { token } = login(data);
    if (token) {
      setToken(token);
      return history.push("/minhahome");
    }
      return history.push("/login");
  };

  return (
    <>
      <NavbarComponent
        title="Best Cloud"
        link1="PESSOAL"
        link2="PEQUENAS EMPRESAS"
        link3="GRANDES EMPRESAS"
      />
      <div className="body">
        <div className="product-panel">
          <h2 className="Entrar-tag-form">Entrar</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="mb-3 text-product">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                ref={register({
                  required: {
                    value: true,
                    message: "Email ou senha inválido",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="mb-3 text-product">
              <label className="form-label">Senha</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                id="password"
                type="password"
                className="form-control"
                name="password"
                ref={register({
                  required: {
                    value: true,
                    message: "Email ou senha inválido",
                  },
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div className="login-button">
              <button
                type="submit"
                className="btn btn-block btn-lg btn-primary"
              >
                ENTRAR
              </button>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="checked"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Lembre-se de mim.</label>
              </div>
            </div>
          </form>
          <p className="text-product">
            Novo por aqui?{" "}
            <Link to="/CriarConta">Crie uma conta gratuitamente.</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
