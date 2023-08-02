/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const JournalEntryEndpointRequest: core.serialization.Schema<
    serializers.accounting.JournalEntryEndpointRequest.Raw,
    Omit<Merge.accounting.JournalEntryEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(
        async () => (await import("../../../../../..")).accounting.JournalEntryRequest
    ),
});

export declare namespace JournalEntryEndpointRequest {
    interface Raw {
        model: serializers.accounting.JournalEntryRequest.Raw;
    }
}
