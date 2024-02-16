/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const EmployeesListRequestEmploymentStatus: core.serialization.Schema<
    serializers.hris.EmployeesListRequestEmploymentStatus.Raw,
    Merge.hris.EmployeesListRequestEmploymentStatus
> = core.serialization.enum_(["ACTIVE", "INACTIVE", "PENDING"]);

export declare namespace EmployeesListRequestEmploymentStatus {
    type Raw = "ACTIVE" | "INACTIVE" | "PENDING";
}