import { Route, Routes } from "react-router";
import { Counter } from "./counter";
import { PageLayout } from "./page-layout";
import { Home } from "./home";
import { MenuLink } from "../interfaces/menu-link";
import { Section } from "./section";

function AppRouter() {
  const menuLinks: MenuLink[] = [
    { id: 1, href: "informacion-general", text: "Informacion General" },
    { id: 2, href: "rendimiento", text: "Rendimiento" },
    { id: 3, href: "documentos", text: "Documentos" },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="counter" element={<Counter />} />

      <Route
        path="fondo-de-inversion-abierto-de-crecimiento"
        element={<PageLayout sidenavItems={menuLinks} />}
      >
        {menuLinks.map(({ href, id, text }) => (
          <Route
            key={id}
            index
            path={href}
            element={<Section key={id} title={text} />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export { AppRouter };
