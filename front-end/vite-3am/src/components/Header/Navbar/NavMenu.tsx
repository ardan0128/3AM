import NavItem from './NavItem';

const items = [
  { label: 'Team', path: '/team' },
  { label: 'Member', path: '/member' },
];

export default function NavMenu() {
  return (
    <>
      <ul className="flex justify-center">
        {items.map((item) => (
          <li className="px-8">
            <NavItem key={item.label} to={item.path}>
              {item.label}
            </NavItem>
          </li>
        ))}
      </ul>
    </>
  );
}
