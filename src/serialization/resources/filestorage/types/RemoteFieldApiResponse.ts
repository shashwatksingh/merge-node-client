/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldApiResponse: core.serialization.ObjectSchema<
    serializers.filestorage.RemoteFieldApiResponse.Raw,
    Merge.filestorage.RemoteFieldApiResponse
> = core.serialization.object({
    file: core.serialization.property(
        "File",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).filestorage.RemoteFieldApi))
            .optional()
    ),
    folder: core.serialization.property(
        "Folder",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).filestorage.RemoteFieldApi))
            .optional()
    ),
    drive: core.serialization.property(
        "Drive",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).filestorage.RemoteFieldApi))
            .optional()
    ),
    group: core.serialization.property(
        "Group",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).filestorage.RemoteFieldApi))
            .optional()
    ),
    user: core.serialization.property(
        "User",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).filestorage.RemoteFieldApi))
            .optional()
    ),
});

export declare namespace RemoteFieldApiResponse {
    interface Raw {
        File?: serializers.filestorage.RemoteFieldApi.Raw[] | null;
        Folder?: serializers.filestorage.RemoteFieldApi.Raw[] | null;
        Drive?: serializers.filestorage.RemoteFieldApi.Raw[] | null;
        Group?: serializers.filestorage.RemoteFieldApi.Raw[] | null;
        User?: serializers.filestorage.RemoteFieldApi.Raw[] | null;
    }
}
