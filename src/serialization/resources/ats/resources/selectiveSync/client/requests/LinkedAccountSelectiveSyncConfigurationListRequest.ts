/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const LinkedAccountSelectiveSyncConfigurationListRequest: core.serialization.Schema<
    serializers.ats.LinkedAccountSelectiveSyncConfigurationListRequest.Raw,
    Merge.ats.LinkedAccountSelectiveSyncConfigurationListRequest
> = core.serialization.object({
    syncConfigurations: core.serialization.property(
        "sync_configurations",
        core.serialization.list(
            core.serialization.lazyObject(
                async () => (await import("../../../../../..")).ats.LinkedAccountSelectiveSyncConfigurationRequest
            )
        )
    ),
});

export declare namespace LinkedAccountSelectiveSyncConfigurationListRequest {
    interface Raw {
        sync_configurations: serializers.ats.LinkedAccountSelectiveSyncConfigurationRequest.Raw[];
    }
}
