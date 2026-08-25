import Home from '@/pages/Home';
import { Route, Routes } from 'react-router';
import teamRoutes from './teamRoutes';
import memberRoutes from './memberRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {teamRoutes()}
      {memberRoutes()}
    </Routes>
  );
}
