"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { sortUnits } from "@/lib/coordination";
import { SortOrder, Unit } from "@/types/unit";
import React from "react";
import { Button } from "./ui/button";
import SortButton from "./SortButton";
import UnitCard from "./UnitCard";

export default function UnitsList() {
  const [dateSort, setDateSort] = useState<SortOrder>("desc");
  const [priceSort, setPriceSort] = useState<SortOrder>("desc");

  const queryClient = useQueryClient();

  const {
    data: units = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["units"],
    queryFn: async () => {
      const response = await fetch(
        "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units"
      );
      if (!response.ok) throw new Error("Failed to fetch units");
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(
        `https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete unit");
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["units"], (oldUnits: Unit[] | undefined) =>
        oldUnits ? oldUnits.filter((unit) => unit.id !== deletedId) : []
      );
    },
  });

  const toggleSort = (type: "date" | "price") => {
    if (type === "date") {
      setDateSort((prev) => (prev === "asc" ? "desc" : "asc"));
      setPriceSort("desc");
    } else {
      setPriceSort((prev) => (prev === "asc" ? "desc" : "asc"));
      setDateSort("desc");
    }
  };

  if (isLoading) return <p className="text-center">Loading units...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading units</p>;

  const sortedUnits = sortUnits(units, dateSort, priceSort);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Units</h1>
        <div className="flex items-center gap-2 text-white">
          <SortButton toggleSort={toggleSort} />
          <Button className="bg-[#5353f1] px-12">Add Unit</Button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedUnits.map((unit) => (
          <UnitCard
            key={unit.id}
            unit={unit}
            onDelete={deleteMutation.mutate}
          />
        ))}
      </div>
    </div>
  );
}
