/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             leadSource: "API Blogger",
 *             title: "Co-Founder",
 *             company: "Merge API",
 *             firstName: "Gil",
 *             lastName: "Feig",
 *             convertedDate: new Date("2022-03-10T00:00:00.000Z")
 *         }
 *     }
 */
export interface LeadEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.crm.LeadRequest;
}
