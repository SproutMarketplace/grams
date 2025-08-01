"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  Warehouse,
  LineChart,
  FileText,
  Receipt,
  MessageSquare,
  Cog,
  LogOut,
  Flower2,
  Handshake,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/inventory", label: "Inventory", icon: Warehouse },
  { href: "/analytics", label: "Demand Forecasting", icon: LineChart },
  { href: "/documents", label: "Document Hub", icon: FileText },
  { href: "/invoicing", label: "Invoicing", icon: Receipt },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/procurement", label: "Procurement", icon: Handshake },
];

export function MainSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/GramstoGains.png" alt="Grams to Gains" width={180} height={40} className="group-data-[collapsed=icon]:hidden" />
          <Flower2 className="w-8 h-8 text-primary hidden group-data-[collapsed=icon]:block" />
        </Link>
      </SidebarHeader>
      <SidebarSeparator className="bg-white/20" />
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon className="text-primary" />
                  <span className="group-data-[collapsed=icon]:hidden">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator className="bg-white/20" />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="#">
                <Cog className="text-primary" />
                <span className="group-data-[collapsed=icon]:hidden">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <Link href="/login">
                <LogOut className="text-primary" />
                <span className="group-data-[collapsed=icon]:hidden">Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
