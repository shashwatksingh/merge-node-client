/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Ticket Object
 * ### Description
 * The `Ticket` object is used to represent a ticket or a task within a system.
 *
 * ### Usage Example
 * TODO
 */
export interface PatchedTicketRequest {
    /** The ticket's name. */
    name?: string;
    assignees?: (string | undefined)[];
    /** The user who created this ticket. */
    creator?: string;
    /** The ticket's due date. */
    dueDate?: string;
    /**
     * The current status of the ticket.
     *
     * * `OPEN` - OPEN
     * * `CLOSED` - CLOSED
     * * `IN_PROGRESS` - IN_PROGRESS
     * * `ON_HOLD` - ON_HOLD
     */
    status?: Merge.ticketing.PatchedTicketRequestStatus;
    /** The ticket’s description. HTML version of description is mapped if supported by the third-party platform. */
    description?: string;
    collections?: (string | undefined)[];
    /** The ticket's type. */
    ticketType?: string;
    /** The account associated with the ticket. */
    account?: string;
    /** The contact associated with the ticket. */
    contact?: string;
    /** The ticket's parent ticket. */
    parentTicket?: string;
    tags?: (string | undefined)[];
    /** When the ticket was completed. */
    completedAt?: string;
    /** The 3rd party url of the Ticket. */
    ticketUrl?: string;
    /**
     * The priority or urgency of the Ticket.
     *
     * * `URGENT` - URGENT
     * * `HIGH` - HIGH
     * * `NORMAL` - NORMAL
     * * `LOW` - LOW
     */
    priority?: Merge.ticketing.PatchedTicketRequestPriority;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
    remoteFields?: Merge.ticketing.RemoteFieldRequest[];
}
