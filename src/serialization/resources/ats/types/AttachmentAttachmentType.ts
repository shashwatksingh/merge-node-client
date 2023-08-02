/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AttachmentAttachmentType: core.serialization.Schema<
    serializers.ats.AttachmentAttachmentType.Raw,
    Merge.ats.AttachmentAttachmentType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.AttachmentTypeEnum),
    core.serialization.string(),
]);

export declare namespace AttachmentAttachmentType {
    type Raw = serializers.ats.AttachmentTypeEnum.Raw | string;
}
