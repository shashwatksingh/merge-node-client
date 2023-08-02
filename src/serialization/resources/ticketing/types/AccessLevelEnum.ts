/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccessLevelEnum: core.serialization.Schema<
    serializers.ticketing.AccessLevelEnum.Raw,
    Merge.ticketing.AccessLevelEnum
> = core.serialization.enum_(["PRIVATE", "COMPANY", "PUBLIC"]);

export declare namespace AccessLevelEnum {
    type Raw = "PRIVATE" | "COMPANY" | "PUBLIC";
}
