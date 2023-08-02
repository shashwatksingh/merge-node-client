/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const UsersRetrieveRequestExpand: core.serialization.Schema<
    serializers.ticketing.UsersRetrieveRequestExpand.Raw,
    Merge.ticketing.UsersRetrieveRequestExpand
> = core.serialization.enum_(["roles", "teams", "teams,roles"]);

export declare namespace UsersRetrieveRequestExpand {
    type Raw = "roles" | "teams" | "teams,roles";
}
