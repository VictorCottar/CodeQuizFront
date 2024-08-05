import logo from '../assets/Logo2.svg';
import Formulario from '../components/Formulario';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLoginSucess = () => { 
    navigate('/quiz');
  }

  return (
    <>
      <div className='flex'>
      <div className="bg-neutral-700 w-full md:w-1/2 h-screen flex flex-col items-center space-y-20">
        <div className="mt-20 flex flex-col flex-wrap items-center text-center space-y-2">
          <h1 className="text-5xl text-orange-500 font-semibold">CodeQuiz</h1>
          <p className='text-xl text-orange-500 font-medium'>Teste seus conhecimentos em programação com esse Quiz!</p>
        </div>
        <Formulario onLoginSucess={handleLoginSucess} />
      </div>
      <div className='hidden md:flex justify-center items-center w-1/2 h-screen'>
        <img className='size-fit' src={logo}/>
      </div>
      </div>
    </>
  );
}