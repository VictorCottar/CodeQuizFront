import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import ModalCadastro from './ModalCadastro';

export default function Formulario() {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Adiciona o estado isModalOpen

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <form action="" className="flex flex-col justify-center p-8 max-w-[550px] max-h-[550px] space-y-6 border-2 border-r-4 border-b-4 border-orange-500 rounded-lg shadow-shape">
        <div className='flex items-center justify-center text-center flex-wrap'>
          <h2 className='text-orange-500 text-2xl font-medium'>
            Faça seu login ou <button type="button" onClick={openModal} className='underline'>cadastre-se</button>!
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className='flex flex-col space-y-2 w-11/12'>
            <label className="text-3xl text-orange-500 font-light" htmlFor="email">Email</label>
            <input className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none" type="email" placeholder="Digite seu email" />
          </div>

          <div className='flex flex-col space-y-2 w-11/12'>
            <label className="text-3xl text-orange-500 font-light" htmlFor="senha">Senha</label>
            <div className="relative">
              <input className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none w-full" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-500">
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <button type="submit" className="bg-orange-500 p-3 rounded-lg shadow-shape w-11/12 hover:bg-orange-300">
            Login
          </button>
        </div>
      </form>
      <ModalCadastro isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
