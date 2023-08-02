/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AddressType: core.serialization.Schema<
    serializers.accounting.AddressType.Raw,
    Merge.accounting.AddressType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.AddressTypeEnum),
    core.serialization.string(),
]);

export declare namespace AddressType {
    type Raw = serializers.accounting.AddressTypeEnum.Raw | string;
}
