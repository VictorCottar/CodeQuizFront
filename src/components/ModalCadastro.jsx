import PropTypes from "prop-types";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

ModalCadastro.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function ModalCadastro({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async (event) => {
      event.preventDefault();

      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      response.status != 400 ? window.alert("Registrado com sucesso, feche para fazer o login", data) : window.alert("Cadastro já existente", data);
    
  };
  
  if (!isOpen) return null;

  if (isOpen) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center m-auto">
          <form
            onSubmit={handleRegister}
            className="flex flex-col justify-center p-8 m-auto max-w-[550px] max-h-[550px] space-y-6 border-2 border-r-4 border-b-4 border-orange-500 bg-neutral-700 rounded-lg shadow-shape"
          >
            <div className="flex justify-end">
            <button className="" onClick={onClose}>
              <RiCloseFill className="size-8 text-red-700" />
            </button>
            </div>
            <div className="flex items-center">
              <h2 className="text-orange-500 text-3xl font-medium">
                Faça seu cadastro!
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
                  className="p-3 rounded-lg  text-orange-500 shadow-shape focus:outline-none"
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

                <input
                  className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none w-full"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 p-3 rounded-lg shadow-shape w-11/12  hover:bg-orange-300"
              >
                Cadastrar-se
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
