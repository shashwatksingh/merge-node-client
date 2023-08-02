/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const LinkedAccountSelectiveSyncConfigurationListRequest: core.serialization.Schema<
    serializers.accounting.LinkedAccountSelectiveSyncConfigurationListRequest.Raw,
    Merge.accounting.LinkedAccountSelectiveSyncConfigurationListRequest
> = core.serialization.object({
    syncConfigurations: core.serialization.property(
        "sync_configurations",
        core.serialization.list(
            core.serialization.lazyObject(
                async () =>
                    (await import("../../../../../..")).accounting.LinkedAccountSelectiveSyncConfigurationRequest
            )
        )
    ),
});

export declare namespace LinkedAccountSelectiveSyncConfigurationListRequest {
    interface Raw {
        sync_configurations: serializers.accounting.LinkedAccountSelectiveSyncConfigurationRequest.Raw[];
    }
}
