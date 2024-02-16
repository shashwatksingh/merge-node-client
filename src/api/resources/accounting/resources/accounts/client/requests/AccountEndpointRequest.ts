/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             name: "Cash",
 *             description: "Cash",
 *             classification: undefined,
 *             type: "Asset",
 *             status: undefined,
 *             currency: undefined,
 *             accountNumber: "X12Y9AB",
 *             parentAccount: "22d92d6c-22f9-11ed-861d-0242ac120002",
 *             company: "595c8f97-2ac4-45b7-b000-41bdf43240b5"
 *         }
 *     }
 */
export interface AccountEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.accounting.AccountRequest;
}
