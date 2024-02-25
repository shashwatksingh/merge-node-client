/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ModelPermissionDeserializerRequest: core.serialization.ObjectSchema<
    serializers.ticketing.ModelPermissionDeserializerRequest.Raw,
    Merge.ticketing.ModelPermissionDeserializerRequest
> = core.serialization.object({
    isEnabled: core.serialization.property("is_enabled", core.serialization.boolean().optional()),
});

export declare namespace ModelPermissionDeserializerRequest {
    interface Raw {
        is_enabled?: boolean | null;
    }
}
