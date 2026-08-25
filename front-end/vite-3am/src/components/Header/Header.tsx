export default function Header() {
  return (
    <>
      <header>
        <nav className="stroke top-0 flex w-screen flex-row items-start justify-between overflow-hidden text-center text-base">
          <div>
            <a href="/">Home</a>
          </div>
          <ul className="flex justify-center">
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/member">Member</a>
            </li>
          </ul>
          <ul className="flex flex-row justify-end">
            <li>
              <button>
                <div>공유</div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
