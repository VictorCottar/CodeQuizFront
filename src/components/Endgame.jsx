import PropTypes from "prop-types";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

Endgame.propTypes = {
  correctAnswersCount: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired, // Nova prop para o callback
};

export default function Endgame({ correctAnswersCount, onRestart }) {
  const shareUrl = '#codeQuiz'; // Substitua pelo URL que você deseja compartilhar
  const title = `Eu acertei ${correctAnswersCount} de 5 perguntas no CodeQuiz!`;

  return (
    <div className="bg-neutral-700 w-screen h-screen flex flex-col items-center space-y-10 justify-center">
      <h1 className="text-orange-500 text-4xl sm:text-5xl font-semibold text-center">
        Quiz Concluído!
      </h1>
      <p className="text-orange-500 text-xl sm:text-4xl font-semibold text-center">
        Você respondeu 5 perguntas e acertou {correctAnswersCount}.
      </p>
      <p className="text-orange-500 text-xl sm:text-4xl font-semibold text-center">
        Compartilhe seu resultado
      </p>
      <div className="flex space-x-4">
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </div>
      <button
        className="bg-neutral-100 text-orange-500 border-2 border-orange-500 text-xl md:text-3xl p-2 sm:p-3 md:p-4 hover:bg-orange-500 hover:text-white rounded-lg transition duration-300 ease-in-out"
        onClick={onRestart} // Chama o callback quando clicado
      >
        Escolher novo tema!
      </button>
    </div>
  );
}
