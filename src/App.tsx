import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ColorsPage } from './pages/ColorPage';
import { TypographyPage } from './pages/TypographyPage';
import { ButtonPage } from './pages/ButtonPage';
import { InputPage } from './pages/InputPage';
import { StatusBadgePage } from './pages/StatusBadgePage';
import { SelectPage } from './pages/SelectPage';
import { TablePage } from './pages/TablePage';
import { ModalPage } from './pages/ModalPage';
import { ToastPage } from './pages/ToastPage';
import { AppShellPage } from './pages/AppShellPage';

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
      <Route path='/table' element={<TablePage />} />
      <Route path='/modal' element={<ModalPage />} />
      <Route path='/toast' element={<ToastPage />} />
      <Route path='/appshell' element={<AppShellPage />} />
    </Routes>
  );
}

export default App;
