import { SortOrder, StatusType, Unit } from "@/types/unit";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-EG").format(amount);
}
const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const filterUnits = (units: Unit[], statusFilter: StatusType) => {
  return units.filter((unit) =>
    statusFilter === "all" ? true : unit.status === statusFilter
  );
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-EG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export const sortUnits = (
  units: Unit[],
  dateSort: SortOrder,
  priceSort: SortOrder
) => {
  return [...units].sort((a, b) => {
    if (dateSort !== "desc") {
      const dateA = parseDate(a.createdAt);
      const dateB = parseDate(b.createdAt);
      return dateSort === "asc" ? dateA - dateB : dateB - dateA;
    }
    if (priceSort !== "desc") {
      return priceSort === "asc" ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });
};
