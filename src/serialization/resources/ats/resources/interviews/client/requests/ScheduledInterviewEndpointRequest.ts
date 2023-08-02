/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const ScheduledInterviewEndpointRequest: core.serialization.Schema<
    serializers.ats.ScheduledInterviewEndpointRequest.Raw,
    Omit<Merge.ats.ScheduledInterviewEndpointRequest, "isDebugMode" | "runAsync">
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../../../../..")).ats.ScheduledInterviewRequest),
    remoteUserId: core.serialization.property("remote_user_id", core.serialization.string()),
});

export declare namespace ScheduledInterviewEndpointRequest {
    interface Raw {
        model: serializers.ats.ScheduledInterviewRequest.Raw;
        remote_user_id: string;
    }
}
