import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNavLink({ to, children }) {
  const className = "mx-3 no-underline font-semibold";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `text-primary ${className}` : `${className} text-white`
      }
    >
      {children}
    </NavLink>
  );
}

export default HeaderNavLink;
