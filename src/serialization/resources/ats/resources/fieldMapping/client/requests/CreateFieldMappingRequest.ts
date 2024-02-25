/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const CreateFieldMappingRequest: core.serialization.Schema<
    serializers.ats.CreateFieldMappingRequest.Raw,
    Merge.ats.CreateFieldMappingRequest
> = core.serialization.object({
    targetFieldName: core.serialization.property("target_field_name", core.serialization.string()),
    targetFieldDescription: core.serialization.property("target_field_description", core.serialization.string()),
    remoteFieldTraversalPath: core.serialization.property(
        "remote_field_traversal_path",
        core.serialization.list(core.serialization.unknown())
    ),
    remoteMethod: core.serialization.property("remote_method", core.serialization.string()),
    remoteUrlPath: core.serialization.property("remote_url_path", core.serialization.string()),
    commonModelName: core.serialization.property("common_model_name", core.serialization.string()),
});

export declare namespace CreateFieldMappingRequest {
    interface Raw {
        target_field_name: string;
        target_field_description: string;
        remote_field_traversal_path: unknown[];
        remote_method: string;
        remote_url_path: string;
        common_model_name: string;
    }
}
