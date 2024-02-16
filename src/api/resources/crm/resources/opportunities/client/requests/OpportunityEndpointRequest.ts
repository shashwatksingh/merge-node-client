/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             name: "Needs Integrations",
 *             description: "Needs a Unified API for Integrations!",
 *             amount: 1,
 *             status: undefined,
 *             lastActivityAt: new Date("2022-02-10T00:00:00.000Z"),
 *             closeDate: new Date("2022-02-10T00:00:00.000Z")
 *         }
 *     }
 */
export interface OpportunityEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.crm.OpportunityRequest;
}
