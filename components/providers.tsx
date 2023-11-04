'use client';

import { NextUIProvider } from '@nextui-org/react';

interface BaseProvidersContextProps extends React.PropsWithChildren {}

export function Providers({ children }: BaseProvidersContextProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
