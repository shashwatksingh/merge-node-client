/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         model: {
 *             transactionDate: new Date("2020-03-31T00:00:00.000Z"),
 *             currency: undefined,
 *             exchangeRate: "2.9",
 *             totalAmount: 50
 *         }
 *     }
 */
export interface PaymentEndpointRequest {
    /**
     * Whether to include debug fields (such as log file links) in the response.
     */
    isDebugMode?: boolean;
    /**
     * Whether or not third-party updates should be run asynchronously.
     */
    runAsync?: boolean;
    model: Merge.accounting.PaymentRequest;
}
