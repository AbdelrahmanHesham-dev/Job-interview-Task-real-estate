import { cn } from "@/lib/coordination";
import type { UnitStatus } from "@/types/unit";

export function UnitStatus({ status }: { status: UnitStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium capitalize text-white",
        {
          "bg-green-500": status === "reserved",
          "bg-blue-500": status === "pending",
          "bg-red-500": status === "sold",
        }
      )}
    >
      {status}
    </span>
  );
}
