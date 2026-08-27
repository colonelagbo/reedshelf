import { Link } from "react-router-dom";
import ReedShelfLogo from "../assets/reedshelf-logo-transparent.svg";

export function LogoPlaceholder({ compact = false }) {
  return (
    <span
      className="inline-flex items-center"
      aria-label="ReedShelf"
    >
      <img
        src={ReedShelfLogo}
        alt="ReedShelf"
        className={compact ? "h-16 w-auto" : "h-18 w-auto"}
      />
    </span>
  );
}

export const LogoLink = ({ compact = false, onClick }) => (
  <Link to="/" onClick={onClick} className="inline-flex">
    <LogoPlaceholder compact={compact} />
  </Link>
);