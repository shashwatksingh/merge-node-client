/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteField: core.serialization.ObjectSchema<serializers.crm.RemoteField.Raw, Merge.crm.RemoteField> =
    core.serialization.object({
        remoteFieldClass: core.serialization.property(
            "remote_field_class",
            core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteFieldClass)
        ),
        value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace RemoteField {
    interface Raw {
        remote_field_class: serializers.crm.RemoteFieldClass.Raw;
        value?: Record<string, unknown> | null;
    }
}
