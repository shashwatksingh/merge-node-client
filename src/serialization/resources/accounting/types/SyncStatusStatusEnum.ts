/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const SyncStatusStatusEnum: core.serialization.Schema<
    serializers.accounting.SyncStatusStatusEnum.Raw,
    Merge.accounting.SyncStatusStatusEnum
> = core.serialization.enum_(["SYNCING", "DONE", "FAILED", "DISABLED", "PAUSED", "PARTIALLY_SYNCED"]);

export declare namespace SyncStatusStatusEnum {
    type Raw = "SYNCING" | "DONE" | "FAILED" | "DISABLED" | "PAUSED" | "PARTIALLY_SYNCED";
}
