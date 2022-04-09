import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Qna from './components/Qna/Qna';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/qna" element={<Qna />}></Route>
      </Routes>
    </div>
  );
}

export default App;
