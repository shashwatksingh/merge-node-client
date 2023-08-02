/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const DirectionEnum: core.serialization.Schema<serializers.crm.DirectionEnum.Raw, Merge.crm.DirectionEnum> =
    core.serialization.enum_(["INBOUND", "OUTBOUND"]);

export declare namespace DirectionEnum {
    type Raw = "INBOUND" | "OUTBOUND";
}
