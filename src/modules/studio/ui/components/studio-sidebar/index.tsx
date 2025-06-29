"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { StudioSidebarHeader } from "./studio-sidebar-header";
import { PersonalSection } from "./personal-section";

export const StudioSidebar = () => {

  const pathname = usePathname()
  console.log("pathname: ", pathname)
  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
      <SidebarContent className="bg-background">
     
     
        <SidebarGroup>
          <SidebarMenu>
            <StudioSidebarHeader/>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Exit Studio" asChild isActive={pathname === "/studio"} className="active:text-amber-400">
                <Link href="/studio" >
                  <VideoIcon className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Exit Studio" asChild>
                <Link href="/">
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
          </SidebarMenu>
        </SidebarGroup>
        <Separator/>
        <PersonalSection/>
      </SidebarContent>
    </Sidebar>
  );
};
