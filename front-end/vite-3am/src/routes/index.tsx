import { Route, Routes } from 'react-router';
import teamRoutes from './teamRoutes';
import memberRoutes from './memberRoutes';
import Home from '@/pages/Home';
import MainLayout from '@/layouts/MainLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        {teamRoutes()}
        {memberRoutes()}
      </Route>
    </Routes>
  );
}
