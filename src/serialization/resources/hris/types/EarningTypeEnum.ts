/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EarningTypeEnum: core.serialization.Schema<
    serializers.hris.EarningTypeEnum.Raw,
    Merge.hris.EarningTypeEnum
> = core.serialization.enum_(["SALARY", "REIMBURSEMENT", "OVERTIME", "BONUS"]);

export declare namespace EarningTypeEnum {
    type Raw = "SALARY" | "REIMBURSEMENT" | "OVERTIME" | "BONUS";
}
