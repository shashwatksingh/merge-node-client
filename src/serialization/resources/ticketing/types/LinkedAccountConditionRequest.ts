/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LinkedAccountConditionRequest: core.serialization.ObjectSchema<
    serializers.ticketing.LinkedAccountConditionRequest.Raw,
    Merge.ticketing.LinkedAccountConditionRequest
> = core.serialization.object({
    conditionSchemaId: core.serialization.property("condition_schema_id", core.serialization.string()),
    operator: core.serialization.string(),
    value: core.serialization.unknown(),
});

export declare namespace LinkedAccountConditionRequest {
    interface Raw {
        condition_schema_id: string;
        operator: string;
        value?: unknown;
    }
}
