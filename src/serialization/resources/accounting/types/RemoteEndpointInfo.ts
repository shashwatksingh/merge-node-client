/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteEndpointInfo: core.serialization.ObjectSchema<
    serializers.accounting.RemoteEndpointInfo.Raw,
    Merge.accounting.RemoteEndpointInfo
> = core.serialization.object({
    method: core.serialization.string(),
    urlPath: core.serialization.property("url_path", core.serialization.string()),
    fieldTraversalPath: core.serialization.property(
        "field_traversal_path",
        core.serialization.list(core.serialization.unknown())
    ),
});

export declare namespace RemoteEndpointInfo {
    interface Raw {
        method: string;
        url_path: string;
        field_traversal_path: unknown[];
    }
}
