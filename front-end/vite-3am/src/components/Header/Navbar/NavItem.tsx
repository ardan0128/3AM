import styles from './NavItem.module.css';
import { NavLink } from 'react-router';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ''}`
        }
        to={to}
      >
        {children}
      </NavLink>
    </>
  );
}
