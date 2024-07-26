import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import ModalCadastro from "./ModalCadastro";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

Formulario.propTypes = { 
  onLoginSucess: PropTypes.func.isRequired
 }

export default function Formulario({ onLoginSucess }) {
  const navigate = useNavigate();

  const handleRegisterSucess = () => { 
    navigate('/escolhaQuiz');
  }
  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    response.status != 400 ? console.log( 'entrou') : window.alert("Erro ao logar.", data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    onLoginSucess();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center p-8 max-w-[550px] max-h-[550px] space-y-6 border-2 border-r-4 border-b-4 border-orange-500 rounded-lg shadow-shape"
      >
        <div className="flex items-center justify-center text-center flex-wrap">
          <h2 className="text-orange-500 text-2xl font-medium">
            Faça seu login ou{" "}
            <button type="button" onClick={openModal} className="underline">
              cadastre-se
            </button>
            !
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col space-y-2 w-11/12">
            <label
              className="text-3xl text-orange-500 font-light"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-2 w-11/12">
            <label
              className="text-3xl text-orange-500 font-light"
              htmlFor="senha"
            >
              Senha
            </label>
            <div className="relative">
              <input
                className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-500 p-3 rounded-lg shadow-shape w-11/12 hover:bg-orange-300"
          >
            Login
          </button>
        </div>
      </form>
      <ModalCadastro onRegisterSucess={handleRegisterSucess} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
