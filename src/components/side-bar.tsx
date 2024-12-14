import { NavLink } from "react-router";
import { MenuLink } from "../interfaces/menu-link";

interface Props {
  sidenavItems: MenuLink[];
}

function Sidebar({ sidenavItems }: Props) {
  return (
    <div className="flex flex-col border w-48 gap-y-4">
      {sidenavItems.map(({ href, id, text }) => (
        <NavLink key={id} to={href} end>
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export { Sidebar };
