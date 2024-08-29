"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from '@/assets/logo.png'

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
        <div>
      <Navbar className="top-2" />
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Screen Repair</HoveredLink>
            <HoveredLink href="/interface-design">Water Damage</HoveredLink>
            <HoveredLink href="/seo">Battery Replacement</HoveredLink>
            <HoveredLink href="/branding">Console Repair</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href='#contact'>About</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
