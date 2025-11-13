"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home" },
  { label: "Features" },
  { label: "Use-case" },
  { label: "How It Works" },
  { label: "Pricing" },
];

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-[#161618] border-l border-white/10">
        <div className="flex flex-col gap-6 mt-8">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Instrument_Sans',Helvetica] font-normal text-white text-lg hover:text-[#3e96ff] transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="w-full h-auto px-8 py-4 bg-[#3e96ff] rounded-full hover:bg-[#3e96ff]/90">
            <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base text-center tracking-[-0.24px] leading-[normal]">
              Start free trial
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
