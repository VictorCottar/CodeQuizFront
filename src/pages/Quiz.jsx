import { useState } from "react";
import Endgame from "../components/Endgame";
import SelectionTopics from "../components/SelectionTopics";
import axios from "axios";


export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestionsCount, setAnsweredQuestionsCount] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);



  const handleTopicClick = async (topic) => {
    setSelectedTopic(topic);
    await fetchQuestions(topic);
  };

  const fetchQuestions = async (topic) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/questions/${topic}`
      );
      if (response.status === 200) {
        setQuestions(response.data);
        setCurrentQuestionIndex(0);
        setAnsweredQuestionsCount(0);
        setCorrectAnswersCount(0);
      } else {
        throw new Error("Erro ao buscar questões.");
      }
    } catch (error) {
      console.error("Erro ao buscar questões:", error);
      setQuestions([]);
    }
  };

  const handleAnswerClick = async (answer) => {
    try {
      if (answer === questions[currentQuestionIndex].correct_answer) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
      }
      setAnsweredQuestionsCount((prevCount) => prevCount + 1);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Erro ao enviar a resposta:", error);
    }
  };

  const handleRestart = () => {
    setSelectedTopic("");
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnsweredQuestionsCount(0);
    setCorrectAnswersCount(0);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (answeredQuestionsCount >= 5) {
    return <Endgame correctAnswersCount={correctAnswersCount} onRestart={handleRestart} />;
  }

  if (!selectedTopic) {
    return <SelectionTopics handleTopicClick={handleTopicClick} />
    
  }

  if (questions.length > 0 && currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    const shuffledOptions = shuffleArray([
      currentQuestion.option1,
      currentQuestion.option2,
      currentQuestion.option3,
      currentQuestion.correct_answer,
    ]);

    return (
      <div className="bg-neutral-700 w-screen h-screen flex flex-col items-center space-y-10 justify-center">
        <div className="flex flex-col space-y-4 w-full sm:w-2/3">
          <h1 className="text-orange-500 text-4xl sm:text-5xl font-semibold text-center">
            CodeQuiz
          </h1>
          <p className="text-orange-500 text-xl sm:text-4xl font-semibold text-center">
            Quiz escolhido: {selectedTopic}
          </p>
        </div>
        <div className="bg-neutral-700 p-8 border-2 border-r-4 border-b-4 border-orange-500 rounded-lg w-5/6 h-4/6 sm:w-5/12 flex flex-col justify-center items-center pt-3 space-y-12 shadow-shape">
          <div className="flex flex-wrap justify-center text-center">
            <h1 className="font-medium text-xl sm:text-xl md:text-4xl text-orange-500 mt-4">
              {currentQuestion.question}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
          {shuffledOptions.map((option, index) => (
              <button
                key={index}
                className="bg-neutral-100 text-orange-500 border-2 border-orange-500 text-xl md:text-3xl p-2 sm:p-3 md:p-4 hover:bg-orange-500 hover:text-white rounded-lg w-full transition duration-300 ease-in-out"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
