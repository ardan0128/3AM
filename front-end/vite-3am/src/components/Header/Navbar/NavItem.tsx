import { Link } from 'react-router';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  return (
    <>
      <Link to={to}>{children}</Link>
    </>
  );
}
