import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import HomePage from '../pages/Homepage';

export const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
