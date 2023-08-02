/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The PayGroup Object
 * ### Description
 * The `PayGroup` object is used to represent a subset of employees that are put together for payroll processing purposes.
 *
 * ### Usage Example
 * Fetch from the `LIST PayGroup` endpoint and filter by `ID` to show all pay group information.
 */
export interface PayGroup {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The pay group name. */
    payGroupName?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.hris.RemoteData[];
}
