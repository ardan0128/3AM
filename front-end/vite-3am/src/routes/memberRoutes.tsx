import Member from '@/pages/Member';
import { Route } from 'react-router';

export default function memberRoutes() {
  return (
    <>
      <Route path="/member" element={<Member />} />
    </>
  );
}
