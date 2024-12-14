import { Sidebar } from "./side-bar";
import { MenuLink } from "../interfaces/menu-link";
import { Outlet } from "react-router";

interface Props {
  sidenavItems: MenuLink[];
}

function PageLayout({ sidenavItems }: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar sidenavItems={sidenavItems} />
      <Outlet />
    </div>
  );
}

export { PageLayout };
