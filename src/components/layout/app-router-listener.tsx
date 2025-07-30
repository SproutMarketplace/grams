'use client';
import { usePathname } from 'next/navigation';
import { MainLayout } from './main-layout';
import { useEffect, useState } from 'react';

export function AppRouterListener({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!isClient) {
    return null;
  }

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isLandingPage = pathname === '/';

  if (isAuthPage || isLandingPage) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
}
