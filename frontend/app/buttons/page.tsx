import { Button } from "@/components/ui/button";
import React from "react";

const ButtonPage = () => {
  return (
    <div className="max-w-[200px] space-y-5 mt-5">
      <Button className="w-full" variant={"default"} size={"lg"}>
        default
      </Button>
      <Button className="w-full" variant={"secondary"} size={"lg"}>
        secondary
      </Button>
      <Button className="w-full" variant={"ghost"} size={"lg"}>
        ghost
      </Button>
      <Button className="w-full" variant={"outline"} size={"lg"}>
        outline
      </Button>
    </div>
  );
};

export default ButtonPage;
