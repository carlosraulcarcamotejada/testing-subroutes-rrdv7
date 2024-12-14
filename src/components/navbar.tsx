import {
  Navbar as NavbarNextUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Home } from "lucide-react";
import { MenuLink } from "../interfaces/menu-link";
import { NavLink, useLocation } from "react-router";

function Navbar() {
  const menuLinks: MenuLink[] = [
    {
      id: 2,
      href: "/fondo-de-inversion-abierto-de-crecimiento/",
      text: "Fondo de Crecimiento",
    },
    {
      id: 3,
      href: "/counter/",
      text: "Counter",
    },
  ];

  return (
    <NavbarNextUI>
      <NavbarBrand>
        <NavLink className="flex space-x-2" to={"/"}>
          <Home />
          <span>Home</span>
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        {menuLinks.map((menuLink) => {
          const { pathname } = useLocation();
          const isActive: boolean = pathname === menuLink.href ? true : false;
          return (
            <NavbarItem isActive={isActive} key={menuLink.id}>
              <NavLink to={menuLink.href}>{menuLink.text}</NavLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </NavbarNextUI>
  );
}

export { Navbar };
