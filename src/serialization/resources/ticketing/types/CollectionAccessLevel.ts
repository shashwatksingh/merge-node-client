/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CollectionAccessLevel: core.serialization.Schema<
    serializers.ticketing.CollectionAccessLevel.Raw,
    Merge.ticketing.CollectionAccessLevel
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ticketing.AccessLevelEnum),
    core.serialization.string(),
]);

export declare namespace CollectionAccessLevel {
    type Raw = serializers.ticketing.AccessLevelEnum.Raw | string;
}
