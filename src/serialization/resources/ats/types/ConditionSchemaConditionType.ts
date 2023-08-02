/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ConditionSchemaConditionType: core.serialization.Schema<
    serializers.ats.ConditionSchemaConditionType.Raw,
    Merge.ats.ConditionSchemaConditionType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.ConditionTypeEnum),
    core.serialization.string(),
]);

export declare namespace ConditionSchemaConditionType {
    type Raw = serializers.ats.ConditionTypeEnum.Raw | string;
}
