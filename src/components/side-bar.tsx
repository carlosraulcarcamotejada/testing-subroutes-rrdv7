import { NavLink } from "react-router";
import { MenuLink } from "../interfaces/menu-link";

interface Props {
  sidenavItems: MenuLink[];
}

function Sidebar({ sidenavItems }: Props) {
  return (
    <div className="flex flex-col border-r w-48 gap-y-4">
      {sidenavItems.map(({ href, id, text }) => {
        return (
          <NavLink
            key={id}
            className={({ isActive }) =>
              `
              ${isActive ? "bg-neutral-300" : ""}
              ${isActive ? "text-red-600" : ""}
              ${!isActive ? "text-gray-700" : ""}

              h-10
              flex
              items-center
              justify-start
              w-full
              pl-2
              hover:underline
          
              `
            }
            to={href}
            end
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export { Sidebar };
