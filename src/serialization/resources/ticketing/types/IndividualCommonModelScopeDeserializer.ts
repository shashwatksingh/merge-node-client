/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const IndividualCommonModelScopeDeserializer: core.serialization.ObjectSchema<
    serializers.ticketing.IndividualCommonModelScopeDeserializer.Raw,
    Merge.ticketing.IndividualCommonModelScopeDeserializer
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string()),
    modelPermissions: core.serialization.property(
        "model_permissions",
        core.serialization
            .record(
                core.serialization.string(),
                core.serialization.lazyObject(
                    async () => (await import("../../..")).ticketing.ModelPermissionDeserializer
                )
            )
            .optional()
    ),
    fieldPermissions: core.serialization.property(
        "field_permissions",
        core.serialization
            .lazyObject(async () => (await import("../../..")).ticketing.FieldPermissionDeserializer)
            .optional()
    ),
});

export declare namespace IndividualCommonModelScopeDeserializer {
    interface Raw {
        model_name: string;
        model_permissions?: Record<string, serializers.ticketing.ModelPermissionDeserializer.Raw> | null;
        field_permissions?: serializers.ticketing.FieldPermissionDeserializer.Raw | null;
    }
}
