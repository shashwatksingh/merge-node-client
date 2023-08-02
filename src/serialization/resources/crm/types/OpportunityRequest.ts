/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const OpportunityRequest: core.serialization.ObjectSchema<
    serializers.crm.OpportunityRequest.Raw,
    Merge.crm.OpportunityRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    owner: core.serialization.string().optional(),
    account: core.serialization.string().optional(),
    stage: core.serialization.string().optional(),
    status: core.serialization.lazy(async () => (await import("../../..")).crm.OpportunityRequestStatus).optional(),
    lastActivityAt: core.serialization.property("last_activity_at", core.serialization.string().optional()),
    closeDate: core.serialization.property("close_date", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property(
        "remote_fields",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.RemoteFieldRequest))
            .optional()
    ),
});

export declare namespace OpportunityRequest {
    interface Raw {
        name?: string | null;
        description?: string | null;
        amount?: number | null;
        owner?: string | null;
        account?: string | null;
        stage?: string | null;
        status?: serializers.crm.OpportunityRequestStatus.Raw | null;
        last_activity_at?: string | null;
        close_date?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: serializers.crm.RemoteFieldRequest.Raw[] | null;
    }
}
