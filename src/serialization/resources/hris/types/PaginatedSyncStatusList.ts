/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedSyncStatusList: core.serialization.ObjectSchema<
    serializers.hris.PaginatedSyncStatusList.Raw,
    Merge.hris.PaginatedSyncStatusList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.SyncStatus))
        .optional(),
});

export declare namespace PaginatedSyncStatusList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.hris.SyncStatus.Raw[] | null;
    }
}
