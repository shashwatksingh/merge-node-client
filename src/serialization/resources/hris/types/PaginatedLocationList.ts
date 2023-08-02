/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedLocationList: core.serialization.ObjectSchema<
    serializers.hris.PaginatedLocationList.Raw,
    Merge.hris.PaginatedLocationList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.Location))
        .optional(),
});

export declare namespace PaginatedLocationList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.hris.Location.Raw[] | null;
    }
}
