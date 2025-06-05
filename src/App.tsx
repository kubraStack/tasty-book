
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage/HomePage';

function App(){
  return(
      <BrowserRouter>
        <div className='app-container'>
          <main className='main-content'>
            <Routes>
              <Route path="/" element={<HomePage />} />

            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App
