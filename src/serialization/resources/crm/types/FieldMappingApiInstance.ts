/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldMappingApiInstance: core.serialization.ObjectSchema<
    serializers.crm.FieldMappingApiInstance.Raw,
    Merge.crm.FieldMappingApiInstance
> = core.serialization.object({
    id: core.serialization.string().optional(),
    isIntegrationWide: core.serialization.property("is_integration_wide", core.serialization.boolean().optional()),
    targetField: core.serialization.property(
        "target_field",
        core.serialization
            .lazyObject(async () => (await import("../../..")).crm.FieldMappingApiInstanceTargetField)
            .optional()
    ),
    remoteField: core.serialization.property(
        "remote_field",
        core.serialization
            .lazyObject(async () => (await import("../../..")).crm.FieldMappingApiInstanceRemoteField)
            .optional()
    ),
});

export declare namespace FieldMappingApiInstance {
    interface Raw {
        id?: string | null;
        is_integration_wide?: boolean | null;
        target_field?: serializers.crm.FieldMappingApiInstanceTargetField.Raw | null;
        remote_field?: serializers.crm.FieldMappingApiInstanceRemoteField.Raw | null;
    }
}
