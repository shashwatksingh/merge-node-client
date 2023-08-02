/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const DebugModelLogSummary: core.serialization.ObjectSchema<
    serializers.accounting.DebugModelLogSummary.Raw,
    Merge.accounting.DebugModelLogSummary
> = core.serialization.object({
    url: core.serialization.string(),
    method: core.serialization.string(),
    statusCode: core.serialization.property("status_code", core.serialization.number()),
});

export declare namespace DebugModelLogSummary {
    interface Raw {
        url: string;
        method: string;
        status_code: number;
    }
}
