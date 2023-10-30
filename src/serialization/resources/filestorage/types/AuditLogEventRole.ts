/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AuditLogEventRole: core.serialization.Schema<
    serializers.filestorage.AuditLogEventRole.Raw,
    Merge.filestorage.AuditLogEventRole
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).filestorage.RoleEnum),
    core.serialization.string(),
]);

export declare namespace AuditLogEventRole {
    type Raw = serializers.filestorage.RoleEnum.Raw | string;
}