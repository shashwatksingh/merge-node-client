/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface Issue {
    id?: string;
    /**
     * Status of the issue. Options: ('ONGOING', 'RESOLVED')
     *
     * * `ONGOING` - ONGOING
     * * `RESOLVED` - RESOLVED
     */
    status?: Merge.filestorage.IssueStatus;
    errorDescription: string;
    endUser?: Record<string, unknown>;
    firstIncidentTime?: string;
    lastIncidentTime?: string;
    isMuted?: boolean;
    errorDetails?: string[];
}
