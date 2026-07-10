import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ColorsPage } from './pages/ColorPage';
import { TypographyPage } from './pages/TypographyPage';
import { ButtonPage } from './pages/ButtonPage';
import { InputPage } from './pages/InputPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/colors' element={<ColorsPage />} />
      <Route path='/typography' element={<TypographyPage />} />
      <Route path='/button' element={<ButtonPage />} />
      <Route path='/input' element={<InputPage />} />
    </Routes>
  );
}

export default App;
