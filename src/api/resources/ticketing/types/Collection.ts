/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Collection Object
 * ### Description
 * The `Collection` object is used to represent collections of tickets. Collections may include other collections as
 * sub collections.
 *
 * ### Usage Example
 * TODO
 */
export interface Collection {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The collection's name. */
    name?: string;
    /** The collection's description. */
    description?: string;
    /**
     * The collection's type.
     *
     * * `LIST` - LIST
     * * `PROJECT` - PROJECT
     */
    collectionType?: Merge.ticketing.CollectionCollectionType;
    /** The parent collection for this collection. */
    parentCollection?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /**
     * The level of access a User has to the Collection and its sub-objects.
     *
     * * `PRIVATE` - PRIVATE
     * * `COMPANY` - COMPANY
     * * `PUBLIC` - PUBLIC
     */
    accessLevel?: Merge.ticketing.CollectionAccessLevel;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ticketing.RemoteData[];
}
