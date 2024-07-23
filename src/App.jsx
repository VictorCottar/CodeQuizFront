import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import logo from './assets/Logo.svg';

export default function App() {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='flex'>
      <div className="bg-neutral-700 w-1/2 h-screen flex flex-col items-center shadow-shape space-y-32">
        <div className="mt-20 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-6xl text-orange-600">CodeQuiz</h1>
          <p className='text-2xl text-orange-600'>Teste seus conhecimentos em programação com esse Quiz!</p>
        </div>

        <form action="" className="flex flex-col p-3 w-[400px] h-[500px] space-y-6">
          <div className="flex flex-col space-y-4">
            <label className="text-3xl text-orange-500" htmlFor="email">Email</label>
            <input className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none" type="text" placeholder="Digite seu email" />

            <label className="text-3xl text-orange-500" htmlFor="senha">Senha</label>
            <div className="relative">
              <input className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none w-full" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-500">
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div> 
          <button className="bg-white p-3 rounded-lg shadow-shape hover:bg-orange-500" type="submit">
              Login
          </button>
        </form>
      </div>
      <div className='flex justify-center items-center w-1/2 h-screen shadow-shape'>
        <img className='w-[900px] h-[900px]' src={logo}/>
      </div>
      </div>
    </>
  );
}