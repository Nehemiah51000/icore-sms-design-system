import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ColorsPage } from './pages/ColorPage';
import { TypographyPage } from './pages/TypographyPage';
import { ButtonPage } from './pages/ButtonPage';
import { InputPage } from './pages/InputPage';
import { StatusBadgePage } from './pages/StatusBadgePage';
import { SelectPage } from './pages/SelectPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/colors' element={<ColorsPage />} />
      <Route path='/typography' element={<TypographyPage />} />
      <Route path='/button' element={<ButtonPage />} />
      <Route path='/input' element={<InputPage />} />
      <Route path='/status-badge' element={<StatusBadgePage />} />
      <Route path='/select' element={<SelectPage />} />
    </Routes>
  );
}

export default App;
