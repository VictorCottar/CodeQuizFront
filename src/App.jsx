import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EscolhaQuiz from './pages/EscolhaQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escolhaQuiz" element={<EscolhaQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;