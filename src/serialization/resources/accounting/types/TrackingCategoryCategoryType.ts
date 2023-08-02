/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TrackingCategoryCategoryType: core.serialization.Schema<
    serializers.accounting.TrackingCategoryCategoryType.Raw,
    Merge.accounting.TrackingCategoryCategoryType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.CategoryTypeEnum),
    core.serialization.string(),
]);

export declare namespace TrackingCategoryCategoryType {
    type Raw = serializers.accounting.CategoryTypeEnum.Raw | string;
}
