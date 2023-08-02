/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Comment: core.serialization.ObjectSchema<serializers.ticketing.Comment.Raw, Merge.ticketing.Comment> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        user: core.serialization.string().optional(),
        contact: core.serialization.string().optional(),
        body: core.serialization.string().optional(),
        htmlBody: core.serialization.property("html_body", core.serialization.string().optional()),
        ticket: core.serialization.string().optional(),
        isPrivate: core.serialization.property("is_private", core.serialization.boolean().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.string().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).ticketing.RemoteData))
                .optional()
        ),
    });

export declare namespace Comment {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        user?: string | null;
        contact?: string | null;
        body?: string | null;
        html_body?: string | null;
        ticket?: string | null;
        is_private?: boolean | null;
        remote_created_at?: string | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.ticketing.RemoteData.Raw[] | null;
    }
}
