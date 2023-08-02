/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Application Object
 * ### Description
 * The Application Object is used to represent a candidate's journey through a particular Job's recruiting process. If a Candidate applies for multiple Jobs, there will be a separate Application for each Job if the third-party integration allows it.
 *
 * ### Usage Example
 * Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications.
 */
export interface Application {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The candidate applying. */
    candidate?: string;
    /** The job being applied for. */
    job?: string;
    /** When the application was submitted. */
    appliedAt?: string;
    /** When the application was rejected. */
    rejectedAt?: string;
    /** The application's source. */
    source?: string;
    /** The user credited for this application. */
    creditedTo?: string;
    /** The application's current stage. */
    currentStage?: string;
    /** The application's reason for rejection. */
    rejectReason?: string;
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
