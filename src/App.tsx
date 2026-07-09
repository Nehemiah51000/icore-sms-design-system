import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ColorsPage } from './pages/ColorPage';
import { TypographyPage } from './pages/TypographyPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/colors' element={<ColorsPage />} />
      <Route path='/typography' element={<TypographyPage />} />
      {/* Component detail routes get added here as we build each one */}
    </Routes>
  );
}

export default App;
