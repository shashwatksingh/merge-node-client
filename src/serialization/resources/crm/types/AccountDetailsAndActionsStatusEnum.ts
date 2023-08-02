/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountDetailsAndActionsStatusEnum: core.serialization.Schema<
    serializers.crm.AccountDetailsAndActionsStatusEnum.Raw,
    Merge.crm.AccountDetailsAndActionsStatusEnum
> = core.serialization.enum_(["COMPLETE", "INCOMPLETE", "RELINK_NEEDED"]);

export declare namespace AccountDetailsAndActionsStatusEnum {
    type Raw = "COMPLETE" | "INCOMPLETE" | "RELINK_NEEDED";
}
