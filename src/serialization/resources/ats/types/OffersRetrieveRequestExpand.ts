/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const OffersRetrieveRequestExpand: core.serialization.Schema<
    serializers.ats.OffersRetrieveRequestExpand.Raw,
    Merge.ats.OffersRetrieveRequestExpand
> = core.serialization.enum_(["application", "application,creator", "creator"]);

export declare namespace OffersRetrieveRequestExpand {
    type Raw = "application" | "application,creator" | "creator";
}
