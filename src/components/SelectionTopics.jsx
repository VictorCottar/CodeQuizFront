import { CircleCheckBig } from "lucide-react";
import Proptypes from "prop-types";

SelectionTopics.propTypes = {
  handleTopicClick: Proptypes.func.isRequired,
};

export default function SelectionTopics({ handleTopicClick }) {
  const topics = [
    "Python",
    "Java",
    "Javascript",
    "Node",
    "ReactJS",
    "HTML",
    "CSS",
  ];

  return (
  <div className="bg-neutral-700 w-screen h-screen flex flex-col items-center space-y-12 justify-center">
    <h1 className="text-orange-500 sm:text-6xl text-5xl font-semibold text-center">
      CodeQuiz
    </h1>
    <div className="bg-neutral-700 p-8 border-2 border-r-4 border-b-4 border-orange-500 rounded-lg w-5/6 h-4/6 sm:w-5/12 flex flex-col justify-center items-center pt-3 space-y-12 shadow-shape">
      <div className="flex flex-wrap justify-center text-center">
        <h1 className="font-medium text-2xl md:text-4xl text-orange-500 mt-4">
          Escolha o tema do seu Quiz!
        </h1>
      </div>
      <div className="flex flex-row justify-around items-center space-x-24 space-y-4">
        <div className="flex flex-col space-y-4">
          {topics.map((topic) => (
            <button
              key={topic}
              className="text-3xl text-neutral-200 hover:text-orange-500"
              onClick={() => handleTopicClick(topic)}
            >
              <CircleCheckBig size={24} className="inline-block mr-2" />
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}
