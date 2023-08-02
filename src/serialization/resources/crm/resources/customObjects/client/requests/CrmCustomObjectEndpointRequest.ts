/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const CrmCustomObjectEndpointRequest: core.serialization.Schema<
    serializers.crm.CrmCustomObjectEndpointRequest.Raw,
    Omit<Merge.crm.CrmCustomObjectEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).crm.CustomObjectRequest),
});

export declare namespace CrmCustomObjectEndpointRequest {
    interface Raw {
        model: serializers.crm.CustomObjectRequest.Raw;
    }
}
