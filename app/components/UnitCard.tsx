import { formatCurrency } from "@/lib/coordination";
import { Unit } from "@/types/unit";
import { Bath, BedSingle, Maximize, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { UnitStatus } from "./UnitStatus";

interface UnitCardProps {
  unit: Unit;
  onDelete: (id: string) => void;
}

export default function UnitCard({ unit, onDelete }: UnitCardProps) {
  return (
    <div className="bg-[#F2F3F4] rounded-lg shadow-sm overflow-hidden">
      <div className="flex sm:gap-4 flex-col md:flex-row">
        <UnitImage unit={unit} />

        <div className="flex-1 min-w-0 py-4 px-2">
          <UnitDetails unit={unit} />

          <div className="flex justify-between items-center mt-4">
            <div className="w-full"></div>

            <div className="text-sm text-gray-500">
              <p>Added {unit.createdAt}</p>
            </div>
          </div>
        </div>
        <div>
          <Button
            size="lg"
            className="bg-red-400 hover:bg-red-500 w-full min-h-full rounded-t-none rounded-b-md md:rounded-e-md md:rounded-s-none"
            onClick={() => onDelete(unit.id)}
          >
            <Trash className="size-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function UnitImage({ unit }: { unit: Unit }) {
  return (
    <div className="relative aspect-video md:aspect-square rounded-md md:rounded-s-md md:w-56">
      <Image
        src={unit.coverUrl}
        alt={unit.name}
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}

function UnitDetails({ unit }: { unit: Unit }) {
  return (
    <>
      <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-1">
        <div className="flex items-start gap-2">
          <div>
            <h3 className="text-xl font-medium text-black">{unit.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{unit.address}</p>
          </div>
          <UnitStatus status={unit.status} />
        </div>
        <span className="text-xl font-bold text-red-500">
          {formatCurrency(unit.price)} EGP
        </span>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-[#494949]">
          <BedSingle className="size-6 p-1 bg-white border border-primary text-primary rounded-md" />
          <span className="font-medium text-sm">{unit.bedroomsNumber} Rooms</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#494949]">
          <Bath className="size-6 p-1 bg-white border border-primary text-primary rounded-md" />
          <span className="font-medium text-sm">{unit.bathroomsNumber} Bathroom</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#494949]">
          <Maximize className="size-6 p-1 bg-white border border-primary text-primary rounded-md" />
          <span className="font-medium text-sm">{unit.space} m</span>
        </div>
      </div>
    </>
  );
}
