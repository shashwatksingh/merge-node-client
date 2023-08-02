/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const WebhookReceiver: core.serialization.ObjectSchema<
    serializers.ats.WebhookReceiver.Raw,
    Merge.ats.WebhookReceiver
> = core.serialization.object({
    event: core.serialization.string(),
    isActive: core.serialization.property("is_active", core.serialization.boolean()),
    key: core.serialization.string().optional(),
});

export declare namespace WebhookReceiver {
    interface Raw {
        event: string;
        is_active: boolean;
        key?: string | null;
    }
}
