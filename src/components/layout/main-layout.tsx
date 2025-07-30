"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { MainSidebar } from "./main-sidebar";
import { Button } from "../ui/button";
import { Bell, User } from "lucide-react";
import Link from "next/link";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <MainSidebar />
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <SidebarTrigger className="sm:hidden" />
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5 text-primary" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <Link href="/login">
                <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5 text-primary" />
                <span className="sr-only">Toggle user menu</span>
                </Button>
            </Link>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
