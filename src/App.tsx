import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* Component detail routes get added here as we build each one */}
    </Routes>
  );
}

export default App;
