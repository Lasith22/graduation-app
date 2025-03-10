import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      {/* <div className=" min-h-screen bg-[#F7F9FA] p-[30px]">
        <MainForm />
      </div> */}
    </>
  );
}

export default App;
