import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="h-20 w-fullpx-4">
      <div className="lg:max-w-screen-lg h-full m-auto flex justify-between items-center ">
        <div className="flex items-center gap-x-3">
          <Image src="/logo.svg" height={40} width={40} alt="LOGO" />
          <p className="font-bold text-2xl">TAL5E9</p>
        </div>
        <div className="md:flex items-center hidden">
          <div className="flex gap-x-2 text-sm">
            <Button variant={"ghost"}>Pricing</Button>
            <Button variant={"ghost"}>About us</Button>
            <Button variant={"ghost"}>Features</Button>
            <Button variant={"ghost"}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
