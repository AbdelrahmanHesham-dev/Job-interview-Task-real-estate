"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";

interface SortButton {
  toggleSort: (type: "date" | "price") => void;
}

export default function SortButton({ toggleSort }: SortButton) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-[#5353f1]">
          <ArrowDownUp />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2">
        <DropdownMenuItem onClick={() => toggleSort("date")}>
          Date
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleSort("price")}>
          Price
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
