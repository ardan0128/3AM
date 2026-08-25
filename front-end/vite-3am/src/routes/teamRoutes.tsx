import Team from '@/pages/Team';
import { Route } from 'react-router';

export default function teamRoutes() {
  return (
    <>
      <Route path="/team" element={<Team />} />
    </>
  );
}
