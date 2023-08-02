/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ErrorValidationProblem: core.serialization.ObjectSchema<
    serializers.crm.ErrorValidationProblem.Raw,
    Merge.crm.ErrorValidationProblem
> = core.serialization.object({
    source: core.serialization
        .lazyObject(async () => (await import("../../..")).crm.ValidationProblemSource)
        .optional(),
    title: core.serialization.string(),
    detail: core.serialization.string(),
    problemType: core.serialization.property("problem_type", core.serialization.string()),
});

export declare namespace ErrorValidationProblem {
    interface Raw {
        source?: serializers.crm.ValidationProblemSource.Raw | null;
        title: string;
        detail: string;
        problem_type: string;
    }
}
