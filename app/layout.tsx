import '@/styles/globals.css';
import { cn } from '@/lib/tailwind';

import { Poppins as FontSans } from 'next/font/google';

import { Providers } from '@/components/providers';
import { DashboardNavigation } from '@/components/navigation/dashboard';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

interface RootLayoutProps extends React.PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased selection:bg-danger/80 selection:text-white ',
          fontSans.variable
        )}
      >
        <Providers>
          <DashboardNavigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
