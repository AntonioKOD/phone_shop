"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
const services = ['Console Repair', 'Back Glass', 'Speakers', 'Cameras', 'Computer Repairs', 'Laptop Repairs', 'Tablet Repairs']

export function Pricing() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Battery Replacement
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            We offer high-quality battery replacements to restore your
            device&apos;s performance.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Screen Repair
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Our experts offer quick and afforadable screen repair services for all
          major phone brands.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Water Damage
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Dropped your device in water? We&apos;ll assess and repair the
            damage, bringing your device back to life.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      
      <Sheet>
        <SheetTrigger>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Check Out Our Other Services
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If youre interested on other services for your devices check here.
            
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>All Services</SheetTitle>
         
        </SheetHeader>
        <SheetDescription>We offer a wide range of services for your devices.</SheetDescription>
        <ul className="space-y-4  m-4">
        {services.map((item, index)=> (
          <li key={index} className="text-2xl"><Separator className="border-b-4">{item}</Separator></li>
        ))}
      </ul>
      <form>
        
      </form>
      </SheetContent>
      
      
      </Sheet>
      </div>
    
  );
}
