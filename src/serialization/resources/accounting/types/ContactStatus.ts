/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ContactStatus: core.serialization.Schema<
    serializers.accounting.ContactStatus.Raw,
    Merge.accounting.ContactStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.Status7D1Enum),
    core.serialization.string(),
]);

export declare namespace ContactStatus {
    type Raw = serializers.accounting.Status7D1Enum.Raw | string;
}
