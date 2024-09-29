import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold text-center ">
        Youtube summary with AI
        <br />
        Online and Simple
      </h1>
      <form className="max-w-[700px] mt-10 flex flex-col items-center">
        <div className="w-full flex items-center relative">
          <Link className="z-20 ml-3 text-muted-foreground" />
          <input
            placeholder="Youtube url"
            className="w-full h-[50px] absolute pl-14 rounded border"
            type="text"
          />
        </div>
        <div className="mt-7">
          <Button
            className="w-[300px] h-[50px] text-xl font-medium "
            variant={"secondary"}
          >
            Summarize
          </Button>
        </div>
      </form>
    </div>
  );
}
