import { NavLink } from 'react-router';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  return (
    <>
      <NavLink
        className="relative text-gray-400 after:absolute after:right-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:text-gray-200 hover:after:left-0 hover:after:w-full"
        to={to}
      >
        {children}
      </NavLink>
    </>
  );
}
