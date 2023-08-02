/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Attachment Object
 * ### Description
 * The `Attachment` object is used to represent an attachment for a ticket.
 *
 * ### Usage Example
 * TODO
 */
export interface Attachment {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The attachment's name. It is required to include the file extension in the attachment's name. */
    fileName?: string;
    /** The ticket associated with the attachment. */
    ticket?: string;
    /** The attachment's url. It is required to include the file extension in the file's URL. */
    fileUrl?: string;
    /** The attachment's file format. */
    contentType?: string;
    /** The user who uploaded the attachment. */
    uploadedBy?: string;
    /** When the third party's attachment was created. */
    remoteCreatedAt?: string;
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
