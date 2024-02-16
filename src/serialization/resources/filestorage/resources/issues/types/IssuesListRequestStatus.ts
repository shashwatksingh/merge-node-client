/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const IssuesListRequestStatus: core.serialization.Schema<
    serializers.filestorage.IssuesListRequestStatus.Raw,
    Merge.filestorage.IssuesListRequestStatus
> = core.serialization.enum_(["ONGOING", "RESOLVED"]);

export declare namespace IssuesListRequestStatus {
    type Raw = "ONGOING" | "RESOLVED";
}