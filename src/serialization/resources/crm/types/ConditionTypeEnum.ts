/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ConditionTypeEnum: core.serialization.Schema<
    serializers.crm.ConditionTypeEnum.Raw,
    Merge.crm.ConditionTypeEnum
> = core.serialization.enum_(["BOOLEAN", "DATE", "DATE_TIME", "INTEGER", "FLOAT", "STRING", "LIST_OF_STRINGS"]);

export declare namespace ConditionTypeEnum {
    type Raw = "BOOLEAN" | "DATE" | "DATE_TIME" | "INTEGER" | "FLOAT" | "STRING" | "LIST_OF_STRINGS";
}
