import PropTypes from "prop-types";
import { RiCloseFill } from "react-icons/ri";

ModalCadastro.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function ModalCadastro({ isOpen, onClose }) {
  if (!isOpen) return null;

  if (isOpen) {
  return (
    <div className="fixed inset-0 flex bg-black/90 justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center bg-neutral-700 item p-8 w-[500px] h-[500px] space-y-8 border-2 border-r-4 border-b-4 border-orange-500 rounded-lg shadow-shape"
      >
        <div className="flex items-center justify-around">
          <h2 className="text-orange-500 text-3xl font-medium">Faça seu cadastro!</h2>
          <button onClick={onClose}>
            <RiCloseFill className="size-10 text-orange-500" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col space-y-2 w-11/12">
            <label className="text-3xl text-orange-500 font-light" htmlFor="email">
              Email
            </label>
            <input
              className="p-3 rounded-lg  text-orange-500 shadow-shape focus:outline-none"
              type="email"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col space-y-2 w-11/12">
            <label className="text-3xl text-orange-500 font-light" htmlFor="senha">
              Senha
            </label>

            <input
              className="p-3 rounded-lg text-orange-500 shadow-shape focus:outline-none w-full"
              type="password"
              placeholder="Digite sua senha"
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
      <button onClick={onClose}>Fechar</button>
    </div>
  );
} 
}
