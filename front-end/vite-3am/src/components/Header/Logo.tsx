import { Link } from 'react-router';

export default function Logo() {
  return (
    <>
      <div>
        <Link className="text-white" to={'/'}>
          Home
        </Link>
      </div>
    </>
  );
}
