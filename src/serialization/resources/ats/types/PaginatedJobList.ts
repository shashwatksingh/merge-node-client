/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedJobList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedJobList.Raw,
    Merge.ats.PaginatedJobList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.Job))
        .optional(),
});

export declare namespace PaginatedJobList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ats.Job.Raw[] | null;
    }
}
