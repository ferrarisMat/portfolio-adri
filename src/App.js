import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from './pages/404';
import Home from "./pages/Home";
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
