export const routes = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    showInHeader: false,
  },
  {
    label: 'Clases',
    href: '/classes',
    showInHeader: true,
  },
  {
    label: 'Contenido',
    href: '/content',
    showInHeader: true,
  },
  {
    label: 'Contacto',
    href: '/contact',
    showInHeader: true,
  },
  {
    label: 'Sobre Nosotros',
    href: '/about',
    showInHeader: false,
  },
];

export const headerNavigationRoutes = routes.filter(
  (item) => item.showInHeader
);
