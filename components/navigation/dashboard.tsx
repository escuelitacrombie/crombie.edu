'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';

import { CrombieLogo } from '@/components/shared/logo';

import { headerNavigationRoutes, routes } from '@/components/navigation/routes';

export function DashboardNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered isBlurred>
      <NavbarContent>
        <NavbarMenuToggle className='sm:hidden text-white' />
        <NavbarBrand>
          <Link href='/' >
            <CrombieLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-8' justify='center'>
        {headerNavigationRoutes.map((route) => {
          const isActive = pathname.includes(route.href);
          const color = isActive ? 'danger' : 'foreground';

          return (
            <NavbarItem key={route.href} isActive={isActive}>
              <Link color={color} href={route.href} className='text-sm' >
                {route.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            color='danger'
            variant='flat'
            href='/auth/start'
            className='font-semibold'
          >
            Ingresar
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {routes.map((route) => (
          <NavbarMenuItem key={route.href}>
            <Link color='foreground' className='w-full' href={route.href}>
              {route.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
