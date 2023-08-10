/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmployeeCompany: core.serialization.Schema<
    serializers.hris.EmployeeCompany.Raw,
    Merge.hris.EmployeeCompany
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).hris.Company),
]);

export declare namespace EmployeeCompany {
    type Raw = string | serializers.hris.Company.Raw;
}