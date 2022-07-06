import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-400">
      <h1>
        <Link href="/">
          <a>
            <span className="text-6xl">News</span>
            <span className="text-6xl">App</span>
          </a>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
