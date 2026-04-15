import { navLinks } from "../constants/index.js";

function Navbar() {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="apple logo" />

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="" />
          </button>
          <button>
            <img src="/cart.svg" alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
