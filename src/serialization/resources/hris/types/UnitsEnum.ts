/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const UnitsEnum: core.serialization.Schema<serializers.hris.UnitsEnum.Raw, Merge.hris.UnitsEnum> =
    core.serialization.enum_(["HOURS", "DAYS"]);

export declare namespace UnitsEnum {
    type Raw = "HOURS" | "DAYS";
}
