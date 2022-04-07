import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-16 w-10/12 mx-auto">
      <div className="container mx-auto">
        <div className="flex-none py-3">
          <Link to="/" className="text-2xl font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end ">
            <Link
              to="/"
              className="mr-8 font-light text-sm tracking-widest hover:text-zinc-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-light text-sm tracking-widest hover:text-zinc-400"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
