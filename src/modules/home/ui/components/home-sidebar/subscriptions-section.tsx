"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trpc } from "@/trpc/client";
import { UserAvatar } from "@/components/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ListIcon } from "lucide-react";

export const LoadingSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuButton disabled>
            <Skeleton className="size-6 rounded-full shrink-0" />
            <Skeleton className="h-4 w-full" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
};

export const SubscriptionsSection = () => {
  const pathname = usePathname();
  const { data, isLoading } = trpc.subscriptions.getMany.useInfiniteQuery(
    { limit: 10 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Subscribed Channels</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {isLoading && <LoadingSkeleton />}
          {!isLoading && data?.pages
            .flatMap((page) => page.items)
            .map((subscription) => (
              <SidebarMenuItem
                key={`${subscription.creatorId}-${subscription.viewerId}`}
              >
                <SidebarMenuButton
                  tooltip={subscription.user.name}
                  asChild
                  isActive={pathname === `/users/${subscription.user.id}`}
                >
                  <Link
                    href={`/users/${subscription.user.id}`}
                    className="flex items-center gap-4"
                  >
                    <UserAvatar
                      size="xs"
                      imageUrl={subscription.user.imageUrl}
                      name={subscription.user.name}
                    />
                    <span className="text-sm">{subscription.user.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            {!isLoading && (
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/subscriptions"}>
                  <Link href="/subscriptions" className="flex items-center gap-4">
                    <ListIcon className="size-4"/>
                    <span className="text-sm">All subscriptions</span>
                  </Link>      
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
