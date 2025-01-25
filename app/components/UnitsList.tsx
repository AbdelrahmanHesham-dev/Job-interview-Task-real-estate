"use client";

import { useState, useEffect } from "react";
import { sortUnits } from "@/lib/coordination";
import { SortOrder, Unit } from "@/types/unit";
import React from "react";
import { Button } from "./ui/button";
import SortButton from "./SortButton";
import UnitCard from "./UnitCard";

export default function UnitsList() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [dateSort, setDateSort] = useState<SortOrder>("desc");
  const [priceSort, setPriceSort] = useState<SortOrder>("desc");

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await fetch(
          "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units"
        );
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.error("error ", error);
      }
    };

    fetchUnits();
  }, []);

  const sortedUnits = sortUnits(units, dateSort, priceSort);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setUnits((prevUnits) => prevUnits.filter((unit) => unit.id !== id));
        console.log("Deleted unit with id:", id);
      } else {
        console.error("Failed to delete the unit");
      }
    } catch (error) {
      console.error("Error deleting unit:", error);
    }
  };

  const toggleSort = (type: "date" | "price") => {
    if (type === "date") {
      setDateSort((prev) => (prev === "asc" ? "desc" : "asc"));
      setPriceSort("desc");
    } else {
      setPriceSort((prev) => (prev === "asc" ? "desc" : "asc"));
      setDateSort("desc");
    }
  };

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
          <UnitCard key={unit.id} unit={unit} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
