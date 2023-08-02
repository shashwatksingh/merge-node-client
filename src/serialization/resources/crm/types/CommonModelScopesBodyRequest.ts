/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CommonModelScopesBodyRequest: core.serialization.ObjectSchema<
    serializers.crm.CommonModelScopesBodyRequest.Raw,
    Merge.crm.CommonModelScopesBodyRequest
> = core.serialization.object({
    modelId: core.serialization.property("model_id", core.serialization.string()),
    enabledActions: core.serialization.property(
        "enabled_actions",
        core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).crm.EnabledActionsEnum))
    ),
    disabledFields: core.serialization.property(
        "disabled_fields",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace CommonModelScopesBodyRequest {
    interface Raw {
        model_id: string;
        enabled_actions: serializers.crm.EnabledActionsEnum.Raw[];
        disabled_fields: string[];
    }
}
