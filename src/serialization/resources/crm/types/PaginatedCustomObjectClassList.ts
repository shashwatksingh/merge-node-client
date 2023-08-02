/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedCustomObjectClassList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedCustomObjectClassList.Raw,
    Merge.crm.PaginatedCustomObjectClassList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.CustomObjectClass))
        .optional(),
});

export declare namespace PaginatedCustomObjectClassList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.crm.CustomObjectClass.Raw[] | null;
    }
}
