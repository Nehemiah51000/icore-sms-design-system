import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ColorsPage } from './pages/ColorPage';
import { TypographyPage } from './pages/TypographyPage';
import { ButtonPage } from './pages/ButtonPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/colors' element={<ColorsPage />} />
      <Route path='/typography' element={<TypographyPage />} />
      <Route path='/button' element={<ButtonPage />} />
    </Routes>
  );
}

export default App;
