/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CommentsListRequestExpand =
    | "contact"
    | "contact,ticket"
    | "ticket"
    | "user"
    | "user,contact"
    | "user,contact,ticket"
    | "user,ticket";

export const CommentsListRequestExpand = {
    Contact: "contact",
    ContactTicket: "contact,ticket",
    Ticket: "ticket",
    User: "user",
    UserContact: "user,contact",
    UserContactTicket: "user,contact,ticket",
    UserTicket: "user,ticket",
} as const;
