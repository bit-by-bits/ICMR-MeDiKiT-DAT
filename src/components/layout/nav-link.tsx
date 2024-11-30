import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  path: string;
  label: string;
  description?: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  path,
  label,
  description,
  className = ""
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  const linkClass = `block p-2 rounded-md transition-colors ${
    isActive
      ? "bg-muted text-foreground font-semibold"
      : "hover:bg-muted text-foreground"
  } ${className}`;

  return (
    <Link to={path} className={linkClass}>
      <div className="font-medium">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
      )}
    </Link>
  );
};

export default NavLink;
