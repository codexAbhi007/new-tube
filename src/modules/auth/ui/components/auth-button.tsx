"use client";

import { ClapperboardIcon, UserCircleIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
export const AuthButton = () => {
  //TODO: Add different auth states
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="My Profile"
              href="/users/current"
              labelIcon={<UserIcon className="size-4" />}
            />
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
          </UserButton.MenuItems>
        </UserButton>
        {/* Add Menu Items for studio and user profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-100 border-blue-500/20 rounded-md shadow-none hover:cursor-pointer hover:bg-blue-900 "
          >
            <UserCircleIcon />
            <p className="hidden md:block">Sign In</p>
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
