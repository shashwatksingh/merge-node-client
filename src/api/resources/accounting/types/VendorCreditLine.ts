/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The VendorCreditLine Object
 * ### Description
 * The `VendorCreditLine` object is used to represent a vendor credit's line items.
 *
 * ### Usage Example
 * Fetch from the `GET VendorCredit` endpoint and view the vendor credit's line items.
 */
export interface VendorCreditLine {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The full value of the credit. */
    netAmount?: number;
    /** The line's associated tracking category. */
    trackingCategory?: string;
    /** The line's associated tracking categories. */
    trackingCategories: string[];
    /** The line's description. */
    description?: string;
    /** The line's account. */
    account?: string;
    /** The company the line belongs to. */
    company?: string;
    /** The vendor credit line item's exchange rate. */
    exchangeRate?: string;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
}
