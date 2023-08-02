/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TimeOffListRequestShowEnumOrigins =
    | "request_type"
    | "request_type,status"
    | "request_type,status,units"
    | "request_type,units"
    | "status"
    | "status,units"
    | "units";

export const TimeOffListRequestShowEnumOrigins = {
    RequestType: "request_type",
    RequestTypeStatus: "request_type,status",
    RequestTypeStatusUnits: "request_type,status,units",
    RequestTypeUnits: "request_type,units",
    Status: "status",
    StatusUnits: "status,units",
    Units: "units",
} as const;
