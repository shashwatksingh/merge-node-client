/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketingAttachmentResponse: core.serialization.ObjectSchema<
    serializers.ticketing.TicketingAttachmentResponse.Raw,
    Merge.ticketing.TicketingAttachmentResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(async () => (await import("../../..")).ticketing.Attachment),
    warnings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ticketing.WarningValidationProblem)
    ),
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ticketing.ErrorValidationProblem)
    ),
    logs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.DebugModeLog))
        .optional(),
});

export declare namespace TicketingAttachmentResponse {
    interface Raw {
        model: serializers.ticketing.Attachment.Raw;
        warnings: serializers.ticketing.WarningValidationProblem.Raw[];
        errors: serializers.ticketing.ErrorValidationProblem.Raw[];
        logs?: serializers.ticketing.DebugModeLog.Raw[] | null;
    }
}
