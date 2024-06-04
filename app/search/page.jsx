"use client";

import { useSearchParams } from "next/navigation";
import SearchList from "../../components/searchlist";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BotMessageSquare } from "lucide-react";

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [showbot, setShowBot] = useState(false);

  return (
    <div className="flex justify-start items-start relative gap-4 bg-white flex-col p-4 mt-[2.5em]">
      <div className="flex flex-col gap-2 w-full top-0 bg-white py-2">
        <div className="w-full flex justify-start font-bold text-lg items-start">
          Search with location
        </div>
        <div className="flex justify-start items-center gap-2 w-full">
          <Input
            className="rounded-[5px] h-[45px]  border-gray-700 focus:border-sky-900 border-2 placeholder:text-gray-400"
            type="text"
            placeholder="search..."
            defaultValue={search}
          />
          <Button className="bg-green-700 hover:bg-green-700 text-white font-semibold w-[10em] h-[45px] rounded-[5px]">
            Search
          </Button>
        </div>
      </div>

      <div className="flex justify-start items-center gap-2 w-full">
        <div className=" text-green-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
          7 Exact Matches
        </div>
        <div className=" text-yellow-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
          2 private
        </div>
        <div className=" text-red-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
          6 Governement
        </div>
      </div>
      <div className="w-full flex justify-start font-semibold items-start">
        Exact Match
      </div>
      <SearchList showemail={true} />
      {/* <div className="bg-gray-200/70 h-[2px] mt-4 w-full"></div> */}
      <div className="w-full flex justify-start font-semibold items-start">
        All Results
      </div>
      <SearchList />
      <SearchList />
      <SearchList />

      <div
        onClick={() => setShowBot(!showbot)}
        className="bg-green-700 flex justify-center items-center w-[4em] h-[4em] rounded-full fixed bottom-2 right-2"
      >
        <BotMessageSquare className="text-white" />
      </div>
      {showbot && (
        <div className="border-green-700 overflow-hidden border-2 w-[25em] h-[60vh] fixed right-[2.5em] bottom-[5em] rounded-xl">
          <iframe
            src="https://chat-geberekoo.vercel.app/"
            className="w-full h-full border-0"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
}