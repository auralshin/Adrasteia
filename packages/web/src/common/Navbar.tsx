"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-16 items-center px-4">
      <h2 className="text-3xl font-medium tracking-tight">Dashboard</h2>
      <div className="ml-auto flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/avatars/01.png" alt="@shadcn" />
          <AvatarFallback>MZ</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
