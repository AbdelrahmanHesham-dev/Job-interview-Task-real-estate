export type UnitStatus = "reserved" | "rejected" | "sold";

export interface Unit {
    id: string;
    name: string;
    address: string;
    price: number;
    bedroomsNumber: number;
    bathroomsNumber: number;
    space: number;
    coverUrl: string;
    status: UnitStatus;
    createdAt: string;
}
export type SortOrder = "asc" | "desc";
export type StatusType = "all" | UnitStatus;
