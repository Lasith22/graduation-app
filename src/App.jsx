import MainForm from './components/MainForm';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div className=" min-h-screen bg-[#F7F9FA] p-[30px]">
        <MainForm />
      </div> */}
    </>
  );
}

export default App;
