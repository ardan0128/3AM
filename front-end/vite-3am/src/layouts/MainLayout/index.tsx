import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <>
      <div className="flex h-dvh flex-col">
        <Header />
        <main className="min-h-0 flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
