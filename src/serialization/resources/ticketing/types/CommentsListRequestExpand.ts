/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CommentsListRequestExpand: core.serialization.Schema<
    serializers.ticketing.CommentsListRequestExpand.Raw,
    Merge.ticketing.CommentsListRequestExpand
> = core.serialization.enum_([
    "contact",
    "contact,ticket",
    "ticket",
    "user",
    "user,contact",
    "user,contact,ticket",
    "user,ticket",
]);

export declare namespace CommentsListRequestExpand {
    type Raw =
        | "contact"
        | "contact,ticket"
        | "ticket"
        | "user"
        | "user,contact"
        | "user,contact,ticket"
        | "user,ticket";
}
