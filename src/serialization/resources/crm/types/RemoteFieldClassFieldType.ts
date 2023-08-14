/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteFieldClassFieldType: core.serialization.Schema<
    serializers.crm.RemoteFieldClassFieldType.Raw,
    Merge.crm.RemoteFieldClassFieldType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).crm.FieldTypeEnum),
    core.serialization.string(),
]);

export declare namespace RemoteFieldClassFieldType {
    type Raw = serializers.crm.FieldTypeEnum.Raw | string;
}