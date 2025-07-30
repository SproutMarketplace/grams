'use client';
import { usePathname } from 'next/navigation';
import { MainLayout } from './main-layout';

export function AppRouterListener({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
}
