/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LinkedAccountSelectiveSyncConfigurationRequest: core.serialization.ObjectSchema<
    serializers.filestorage.LinkedAccountSelectiveSyncConfigurationRequest.Raw,
    Merge.filestorage.LinkedAccountSelectiveSyncConfigurationRequest
> = core.serialization.object({
    linkedAccountConditions: core.serialization.property(
        "linked_account_conditions",
        core.serialization.list(
            core.serialization.lazyObject(
                async () => (await import("../../..")).filestorage.LinkedAccountConditionRequest
            )
        )
    ),
});

export declare namespace LinkedAccountSelectiveSyncConfigurationRequest {
    interface Raw {
        linked_account_conditions: serializers.filestorage.LinkedAccountConditionRequest.Raw[];
    }
}
