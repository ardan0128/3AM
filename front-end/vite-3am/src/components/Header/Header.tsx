import Actions from './Actions/Actions';
import Logo from './Logo';
import Navbar from './Navbar/Navbar';

export default function Header() {
  return (
    <>
      <header>
        <div className="flex h-14 items-center justify-between gap-4 px-6">
          <Logo />
          <Navbar />
          <Actions />
        </div>
      </header>
    </>
  );
}
