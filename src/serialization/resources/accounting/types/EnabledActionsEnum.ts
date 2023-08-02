/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EnabledActionsEnum: core.serialization.Schema<
    serializers.accounting.EnabledActionsEnum.Raw,
    Merge.accounting.EnabledActionsEnum
> = core.serialization.enum_(["READ", "WRITE"]);

export declare namespace EnabledActionsEnum {
    type Raw = "READ" | "WRITE";
}
