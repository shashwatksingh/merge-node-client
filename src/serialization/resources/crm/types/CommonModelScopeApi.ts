/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CommonModelScopeApi: core.serialization.ObjectSchema<
    serializers.crm.CommonModelScopeApi.Raw,
    Merge.crm.CommonModelScopeApi
> = core.serialization.object({
    commonModels: core.serialization.property(
        "common_models",
        core.serialization.list(
            core.serialization.lazyObject(
                async () => (await import("../../..")).crm.IndividualCommonModelScopeDeserializer
            )
        )
    ),
});

export declare namespace CommonModelScopeApi {
    interface Raw {
        common_models: serializers.crm.IndividualCommonModelScopeDeserializer.Raw[];
    }
}