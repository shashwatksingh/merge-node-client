/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LeadsRetrieveRequestExpand: core.serialization.Schema<
    serializers.crm.LeadsRetrieveRequestExpand.Raw,
    Merge.crm.LeadsRetrieveRequestExpand
> = core.serialization.enum_([
    "converted_account",
    "converted_contact",
    "converted_contact,converted_account",
    "owner",
    "owner,converted_account",
    "owner,converted_contact",
    "owner,converted_contact,converted_account",
]);

export declare namespace LeadsRetrieveRequestExpand {
    type Raw =
        | "converted_account"
        | "converted_contact"
        | "converted_contact,converted_account"
        | "owner"
        | "owner,converted_account"
        | "owner,converted_contact"
        | "owner,converted_contact,converted_account";
}
