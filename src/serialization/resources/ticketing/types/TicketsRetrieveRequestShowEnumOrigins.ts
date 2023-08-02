/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketsRetrieveRequestShowEnumOrigins: core.serialization.Schema<
    serializers.ticketing.TicketsRetrieveRequestShowEnumOrigins.Raw,
    Merge.ticketing.TicketsRetrieveRequestShowEnumOrigins
> = core.serialization.enum_([
    "priority",
    "priority,status",
    "priority,status,ticket_type",
    "priority,ticket_type",
    "status",
    "status,ticket_type",
    "ticket_type",
]);

export declare namespace TicketsRetrieveRequestShowEnumOrigins {
    type Raw =
        | "priority"
        | "priority,status"
        | "priority,status,ticket_type"
        | "priority,ticket_type"
        | "status"
        | "status,ticket_type"
        | "ticket_type";
}
