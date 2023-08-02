/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const BankInfoListRequestOrderBy: core.serialization.Schema<
    serializers.hris.BankInfoListRequestOrderBy.Raw,
    Merge.hris.BankInfoListRequestOrderBy
> = core.serialization.enum_(["-remote_created_at", "remote_created_at"]);

export declare namespace BankInfoListRequestOrderBy {
    type Raw = "-remote_created_at" | "remote_created_at";
}
