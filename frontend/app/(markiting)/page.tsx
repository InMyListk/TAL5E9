"use client";

import { Button } from "@/components/ui/button";
import { useFetchData } from "@/hooks/useFetchData";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { summary, setUrl } = useFetchData();

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formatedData = Object.fromEntries(data);
    const url = formatedData.url as string;
    setUrl(url);
    console.log(summary);
  };

  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold text-center ">
        Youtube summary with AI
        <br />
        Online and Simple
      </h1>
      <form
        className="max-w-[700px] mt-10 flex flex-col items-center"
        onSubmit={(e) => {
          HandleSubmit(e);
        }}
      >
        <div className="w-full flex items-center relative">
          <Link className="z-20 ml-3 text-muted-foreground" />
          <input
            placeholder="Youtube url"
            name="url"
            className="w-full h-[50px] absolute pl-14 rounded border"
            type="text"
          />
        </div>
        <div className="mt-7 max-w-[300px]">
          <Button
            className="w-full h-[50px] text-xl font-medium "
            variant={"secondary"}
          >
            Summarize لخص
          </Button>
        </div>

        <div className="flex flex-col items-center gap-y-5 text-end p-5 bg-slate-100 my-10 rounded">
          {summary.map((info) => (
            <div>
              <p className="font-bold text-lg">{info.topic}</p>
              <p className="">{info.information}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
